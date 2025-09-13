document.addEventListener('DOMContentLoaded', () => {
    // 获取DOM元素
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    const startButton = document.getElementById('start-btn');
    const scoreElement = document.getElementById('score');

    // 游戏常量
    const gridSize = 20;
    const tileCount = canvas.width / gridSize;
    
    // 游戏变量
    let snake = [];
    let food = {};
    let direction = 'right';
    let nextDirection = 'right';
    let gameRunning = false;
    let gameSpeed = 150; // 毫秒
    let score = 0;
    let gameLoop;

    // 初始化游戏
    function initGame() {
        // 初始化蛇
        snake = [
            {x: 5, y: 10},
            {x: 4, y: 10},
            {x: 3, y: 10}
        ];
        
        // 初始化方向
        direction = 'right';
        nextDirection = 'right';
        
        // 初始化分数
        score = 0;
        scoreElement.textContent = score;
        
        // 生成食物
        generateFood();
        
        // 绘制游戏
        drawGame();
    }

    // 开始游戏
    function startGame() {
        if (gameRunning) return;
        
        gameRunning = true;
        startButton.textContent = '重新开始';
        initGame();
        
        // 设置游戏循环
        gameLoop = setInterval(() => {
            updateGame();
            drawGame();
        }, gameSpeed);
    }

    // 结束游戏
    function endGame() {
        gameRunning = false;
        clearInterval(gameLoop);
        
        // 绘制游戏结束画面
        ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('游戏结束!', canvas.width / 2, canvas.height / 2 - 30);
        
        ctx.font = '20px Arial';
        ctx.fillText(`最终得分: ${score}`, canvas.width / 2, canvas.height / 2 + 10);
        ctx.fillText('点击"重新开始"按钮再玩一次', canvas.width / 2, canvas.height / 2 + 50);
    }

    // 更新游戏状态
    function updateGame() {
        // 更新方向
        direction = nextDirection;
        
        // 移动蛇
        const head = {x: snake[0].x, y: snake[0].y};
        
        switch(direction) {
            case 'up':
                head.y--;
                break;
            case 'down':
                head.y++;
                break;
            case 'left':
                head.x--;
                break;
            case 'right':
                head.x++;
                break;
        }
        
        // 检查碰撞
        if (checkCollision(head)) {
            endGame();
            return;
        }
        
        // 添加新头部
        snake.unshift(head);
        
        // 检查是否吃到食物
        if (head.x === food.x && head.y === food.y) {
            // 增加分数
            score += 10;
            scoreElement.textContent = score;
            
            // 生成新食物
            generateFood();
            
            // 加速（可选）
            if (score % 50 === 0 && gameSpeed > 50) {
                gameSpeed -= 10;
                clearInterval(gameLoop);
                gameLoop = setInterval(() => {
                    updateGame();
                    drawGame();
                }, gameSpeed);
            }
        } else {
            // 如果没吃到食物，移除尾部
            snake.pop();
        }
    }

    // 检查碰撞
    function checkCollision(head) {
        // 检查墙壁碰撞
        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
            return true;
        }
        
        // 检查自身碰撞
        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                return true;
            }
        }
        
        return false;
    }

    // 生成食物
    function generateFood() {
        let newFood;
        let onSnake;
        
        do {
            onSnake = false;
            newFood = {
                x: Math.floor(Math.random() * tileCount),
                y: Math.floor(Math.random() * tileCount)
            };
            
            // 确保食物不在蛇身上
            for (let segment of snake) {
                if (segment.x === newFood.x && segment.y === newFood.y) {
                    onSnake = true;
                    break;
                }
            }
        } while (onSnake);
        
        food = newFood;
    }

    // 绘制游戏
    function drawGame() {
        // 清空画布
        ctx.fillStyle = '#222';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 绘制蛇
        snake.forEach((segment, index) => {
            // 蛇头
            if (index === 0) {
                ctx.fillStyle = '#4CAF50';
            } 
            // 蛇身
            else {
                ctx.fillStyle = '#8BC34A';
            }
            
            ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 1, gridSize - 1);
        });
        
        // 绘制食物
        ctx.fillStyle = '#FF5722';
        ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 1, gridSize - 1);
    }

    // 键盘控制
    document.addEventListener('keydown', (e) => {
        if (!gameRunning) return;
        
        switch(e.key) {
            case 'ArrowUp':
            case 'w':
            case 'W':
                if (direction !== 'down') nextDirection = 'up';
                break;
            case 'ArrowDown':
            case 's':
            case 'S':
                if (direction !== 'up') nextDirection = 'down';
                break;
            case 'ArrowLeft':
            case 'a':
            case 'A':
                if (direction !== 'right') nextDirection = 'left';
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
                if (direction !== 'left') nextDirection = 'right';
                break;
        }
    });

    // 移动端触摸控制（可选）
    let touchStartX, touchStartY;
    
    canvas.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        e.preventDefault();
    }, false);
    
    canvas.addEventListener('touchmove', (e) => {
        if (!gameRunning) return;
        e.preventDefault();
    }, false);
    
    canvas.addEventListener('touchend', (e) => {
        if (!gameRunning) return;
        
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        
        const dx = touchEndX - touchStartX;
        const dy = touchEndY - touchStartY;
        
        // 判断滑动方向
        if (Math.abs(dx) > Math.abs(dy)) {
            // 水平滑动
            if (dx > 0 && direction !== 'left') {
                nextDirection = 'right';
            } else if (dx < 0 && direction !== 'right') {
                nextDirection = 'left';
            }
        } else {
            // 垂直滑动
            if (dy > 0 && direction !== 'up') {
                nextDirection = 'down';
            } else if (dy < 0 && direction !== 'down') {
                nextDirection = 'up';
            }
        }
        
        e.preventDefault();
    }, false);

    // 开始按钮事件
    startButton.addEventListener('click', startGame);

    // 初始绘制
    initGame();
});
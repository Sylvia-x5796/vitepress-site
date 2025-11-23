// 1. 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });

            // 移动端关闭菜单
            const navUl = document.querySelector('nav ul');
            if (navUl.classList.contains('show')) {
                navUl.classList.remove('show');
            }
        }
    });
});

// 2. 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 3. 汉堡菜单交互
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', function() {
    navUl.classList.toggle('show');
});

// 4. 滚动渐入动画
function checkVisibility() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // 当版块顶部进入视口底部100px时触发
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
}

// 初始加载时检查
window.addEventListener('load', checkVisibility);
// 滚动时检查
window.addEventListener('scroll', checkVisibility);

// 5. 表单验证
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // 姓名验证
        const name = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (!name.value.trim()) {
            nameError.textContent = '请输入姓名';
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }
        
        // 邮箱验证
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailError.textContent = '请输入有效的邮箱地址';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }
        
        // 留言验证
        const message = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (message.value.trim().length < 5) {
            messageError.textContent = '留言内容至少5个字符';
            messageError.style.display = 'block';
            isValid = false;
        } else {
            messageError.style.display = 'none';
        }
        
        if (isValid) {
            // 模拟提交成功
            alert('留言提交成功！');
            contactForm.reset();
        }
    });
}

// 6. 图片轮播
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let slideInterval;

// 显示指定索引的幻灯片
function showSlide(index) {
    // 隐藏所有幻灯片
    slides.forEach(slide => slide.classList.remove('active'));
    // 移除所有指示器激活状态
    dots.forEach(dot => dot.classList.remove('active'));

    // 确保索引在有效范围内
    currentIndex = (index + slides.length) % slides.length;

    // 显示当前幻灯片和激活指示器
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

// 下一张幻灯片
function nextSlide() {
    showSlide(currentIndex + 1);
}

// 上一张幻灯片
function prevSlide() {
    showSlide(currentIndex - 1);
}

// 绑定按钮事件
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// 绑定指示器事件
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// 自动轮播
function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 5000);
}

// 鼠标悬停时暂停轮播
slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// 鼠标离开时继续轮播
slider.addEventListener('mouseleave', startSlideInterval);

// 添加轮播暂停/播放按钮
const playPauseBtn = document.createElement('button');
playPauseBtn.className = 'slider-btn play-pause';
playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
playPauseBtn.style.top = '20px';
playPauseBtn.style.right = '20px';
playPauseBtn.style.width = '40px';
playPauseBtn.style.height = '40px';
document.querySelector('.slider-container').appendChild(playPauseBtn);

let isPlaying = true;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        clearInterval(slideInterval);
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        startSlideInterval();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// 初始化轮播
showSlide(0);
startSlideInterval();
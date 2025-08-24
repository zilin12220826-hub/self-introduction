// =============================================
// 现代科技专业风格 - TikTok运营专家简历网站
// JavaScript功能模块
// =============================================

class TikTokExpertSite {
    constructor() {
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupThemeToggle();
        this.setupTypewriter();
        this.setupAnimations();
        this.setupSkillsChart();
        this.setupContactForm();
        this.setupLoader();
        this.setupIntersectionObserver();
        this.setupSmoothScrolling();
        this.handleWindowResize();
    }

    // 导航功能
    setupNavigation() {
        const navbar = document.getElementById('navbar');
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        // 导航栏滚动效果
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                navbar.classList.remove('scroll-up');
                return;
            }
            
            if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
                navbar.classList.remove('scroll-up');
                navbar.classList.add('scroll-down');
            } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
                navbar.classList.remove('scroll-down');
                navbar.classList.add('scroll-up');
            }
            lastScroll = currentScroll;
        });

        // 移动端菜单切换
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // 导航链接点击处理
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                const element = document.querySelector(target);
                
                if (element) {
                    this.scrollToElement(element);
                    
                    // 关闭移动端菜单
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                    
                    // 更新活动状态
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });
    }

    // 主题切换功能
    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = themeToggle.querySelector('.theme-icon');
        
        // 从localStorage加载主题
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
            
            // 添加切换动画
            document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        });
    }

    // 打字机效果
    setupTypewriter() {
        const typewriterElement = document.getElementById('typewriter');
        const texts = [
            '数据驱动增长',
            '内容营销专家',
            '转化优化师',
            'TikTok运营达人'
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        const typeEffect = () => {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typewriterElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50;
            } else {
                typewriterElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }

            setTimeout(typeEffect, typeSpeed);
        };

        typeEffect();
    }

    // 动画效果
    setupAnimations() {
        // 数字计数动画
        const animateCounters = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.dataset.target);
                    const increment = target / 100;
                    let current = 0;

                    const updateCounter = () => {
                        if (current < target) {
                            current += increment;
                            if (target > 100) {
                                counter.textContent = Math.ceil(current).toLocaleString();
                            } else {
                                counter.textContent = current.toFixed(1);
                            }
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target > 100 ? target.toLocaleString() : target;
                        }
                    };

                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        };

        const counterObserver = new IntersectionObserver(animateCounters, {
            threshold: 0.7
        });

        document.querySelectorAll('.stat-number').forEach(counter => {
            counterObserver.observe(counter);
        });

        // 进度条动画
        const animateProgressBars = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const progress = progressBar.dataset.progress;
                    
                    setTimeout(() => {
                        progressBar.style.width = progress + '%';
                    }, 200);
                    
                    observer.unobserve(progressBar);
                }
            });
        };

        const progressObserver = new IntersectionObserver(animateProgressBars, {
            threshold: 0.5
        });

        document.querySelectorAll('.progress-fill').forEach(progressBar => {
            progressObserver.observe(progressBar);
        });
    }

    // 技能雷达图
    setupSkillsChart() {
        const canvas = document.getElementById('skillsChart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 120;

        const skills = [
            { name: '内容策略', value: 90, color: '#06b6d4' },
            { name: '数据分析', value: 85, color: '#3b82f6' },
            { name: '广告投放', value: 75, color: '#8b5cf6' },
            { name: '工具运用', value: 88, color: '#10b981' }
        ];

        const drawRadarChart = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // 绘制网格
            ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
            ctx.lineWidth = 1;
            
            for (let i = 1; i <= 5; i++) {
                ctx.beginPath();
                ctx.arc(centerX, centerY, (radius * i) / 5, 0, 2 * Math.PI);
                ctx.stroke();
            }

            // 绘制轴线
            skills.forEach((_, index) => {
                const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * radius;
                
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(x, y);
                ctx.stroke();
            });

            // 绘制数据
            ctx.beginPath();
            ctx.fillStyle = 'rgba(6, 182, 212, 0.1)';
            ctx.strokeStyle = '#06b6d4';
            ctx.lineWidth = 2;

            skills.forEach((skill, index) => {
                const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
                const value = (skill.value / 100) * radius;
                const x = centerX + Math.cos(angle) * value;
                const y = centerY + Math.sin(angle) * value;
                
                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });

            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // 绘制数据点
            skills.forEach((skill, index) => {
                const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
                const value = (skill.value / 100) * radius;
                const x = centerX + Math.cos(angle) * value;
                const y = centerY + Math.sin(angle) * value;
                
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, 2 * Math.PI);
                ctx.fillStyle = skill.color;
                ctx.fill();
            });
        };

        // 在图表容器进入视图时绘制
        const chartObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(drawRadarChart, 300);
                    chartObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        chartObserver.observe(canvas);
    }

    // 联系表单
    setupContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitButton = form.querySelector('.submit-button');
            const originalText = submitButton.innerHTML;
            
            // 显示加载状态
            submitButton.innerHTML = '<span>发送中...</span>';
            submitButton.disabled = true;
            
            // 模拟发送
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // 显示成功状态
            submitButton.innerHTML = '<span>发送成功!</span>';
            submitButton.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            // 重置表单
            setTimeout(() => {
                form.reset();
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                submitButton.style.background = '';
                
                // 显示感谢消息
                this.showNotification('感谢您的消息！我会尽快回复您。', 'success');
            }, 2000);
        });

        // 表单验证
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
        });
    }

    // 字段验证
    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let message = '';

        switch (field.type) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                isValid = emailRegex.test(value);
                message = '请输入有效的邮箱地址';
                break;
            case 'text':
                isValid = value.length >= 2;
                message = '请输入至少2个字符';
                break;
            default:
                isValid = value.length >= 10;
                message = '请输入至少10个字符';
        }

        if (field.hasAttribute('required') && !value) {
            isValid = false;
            message = '此字段为必填项';
        }

        // 更新字段样式
        if (value && !isValid) {
            field.style.borderColor = '#ef4444';
            this.showFieldError(field, message);
        } else {
            field.style.borderColor = '';
            this.hideFieldError(field);
        }

        return isValid;
    }

    // 显示字段错误
    showFieldError(field, message) {
        let errorElement = field.parentNode.querySelector('.field-error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            errorElement.style.cssText = `
                color: #ef4444;
                font-size: 0.875rem;
                margin-top: 0.5rem;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            field.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
        setTimeout(() => errorElement.style.opacity = '1', 10);
    }

    // 隐藏字段错误
    hideFieldError(field) {
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.style.opacity = '0';
            setTimeout(() => errorElement.remove(), 300);
        }
    }

    // 加载器
    setupLoader() {
        const loader = document.getElementById('loader');
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('hidden');
                // 触发入场动画
                this.triggerEntranceAnimations();
            }, 1500);
        });
    }

    // 入场动画
    triggerEntranceAnimations() {
        const animateElements = document.querySelectorAll('.hero-content, .hero-visual');
        animateElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    }

    // 交叉观察器设置
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // 更新导航活动状态
                    const id = entry.target.id;
                    if (id) {
                        const navLink = document.querySelector(`[href="#${id}"]`);
                        if (navLink) {
                            document.querySelectorAll('.nav-link').forEach(link => {
                                link.classList.remove('active');
                            });
                            navLink.classList.add('active');
                        }
                    }
                }
            });
        }, observerOptions);

        // 观察所有部分
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // 添加基础动画样式
        const style = document.createElement('style');
        style.textContent = `
            section {
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            }
            section.animate-in {
                opacity: 1;
                transform: translateY(0);
            }
            .skill-card, .project-card {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .animate-in .skill-card,
            .animate-in .project-card {
                opacity: 1;
                transform: translateY(0);
            }
            .animate-in .skill-card:nth-child(1) { transition-delay: 0.1s; }
            .animate-in .skill-card:nth-child(2) { transition-delay: 0.2s; }
            .animate-in .skill-card:nth-child(3) { transition-delay: 0.3s; }
            .animate-in .skill-card:nth-child(4) { transition-delay: 0.4s; }
            .animate-in .skill-card:nth-child(5) { transition-delay: 0.5s; }
            .animate-in .skill-card:nth-child(6) { transition-delay: 0.6s; }
        `;
        document.head.appendChild(style);
    }

    // 平滑滚动
    setupSmoothScrolling() {
        // 已在CSS中设置scroll-behavior: smooth
        // 这里添加额外的滚动控制
        let isScrolling = false;
        
        window.addEventListener('scroll', () => {
            if (!isScrolling) {
                window.requestAnimationFrame(() => {
                    this.updateScrollProgress();
                    isScrolling = false;
                });
                isScrolling = true;
            }
        });
    }

    // 更新滚动进度
    updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        // 可以在这里添加滚动进度条
        document.documentElement.style.setProperty('--scroll-progress', scrollPercent + '%');
    }

    // 滚动到指定元素
    scrollToElement(element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    // 窗口大小调整处理
    handleWindowResize() {
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                // 重新绘制雷达图
                if (document.getElementById('skillsChart')) {
                    this.setupSkillsChart();
                }
                
                // 更新移动端菜单状态
                if (window.innerWidth > 768) {
                    const navMenu = document.getElementById('nav-menu');
                    const hamburger = document.getElementById('hamburger');
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }, 250);
        });
    }

    // 显示通知
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#06b6d4'};
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            z-index: 1001;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// 全局函数
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const site = new TikTokExpertSite();
        site.scrollToElement(element);
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new TikTokExpertSite();
});

// 添加一些实用工具函数
const utils = {
    // 防抖函数
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // 节流函数
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // 检测移动设备
    isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },

    // 获取随机数
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

// 导出到全局作用域
window.TikTokExpertSite = TikTokExpertSite;
window.scrollToSection = scrollToSection;
window.utils = utils;
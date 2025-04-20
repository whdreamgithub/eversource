document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 获取表单数据
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // 表单验证
        if (!validateForm(formData)) {
            return;
        }

        // 发送表单数据（这里需要替换为实际的API端点）
        sendFormData(formData);
    });

    function validateForm(data) {
        // 简单的表单验证
        if (!data.name.trim()) {
            alert('请输入姓名');
            return false;
        }

        if (!data.email.trim()) {
            alert('请输入邮箱');
            return false;
        }

        if (!isValidEmail(data.email)) {
            alert('请输入有效的邮箱地址');
            return false;
        }

        if (!data.subject.trim()) {
            alert('请输入主题');
            return false;
        }

        if (!data.message.trim()) {
            alert('请输入消息内容');
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function sendFormData(data) {
        // 这里应该替换为实际的API调用
        // 示例：使用fetch发送数据
        fetch('your-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('网络响应错误');
            }
            return response.json();
        })
        .then(data => {
            alert('消息发送成功！');
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('发送失败，请稍后重试');
        });
    }
}); 
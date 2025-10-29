// src/hooks/useMobileNav.js
import { useState, useEffect } from 'react';

const useMobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const body = document.body;

		if (isOpen) {
			// Сохраняем текущую прокрутку и компенсируем скроллбар
			const scrollY = window.scrollY || window.pageYOffset;
			const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

			body.style.position = 'fixed';
			body.style.top = `-${scrollY}px`;
			body.style.left = '0';
			body.style.right = '0';
			body.style.width = '100%';
			body.style.paddingRight = `${scrollBarWidth}px`; // компенсация полосы прокрутки
			body.dataset.scrollY = String(scrollY);
			body.classList.add('no-scroll');
		} else {
			// Восстанавливаем прокрутку
			const savedY = parseInt(body.dataset.scrollY || '0', 10);
			body.style.position = '';
			body.style.top = '';
			body.style.left = '';
			body.style.right = '';
			body.style.width = '';
			body.style.paddingRight = ''; // убираем компенсацию
			body.classList.remove('no-scroll');
			delete body.dataset.scrollY;

			// Возвращаем на прежнюю позицию
			window.scrollTo(0, savedY);
		}

		// Очистка при размонтировании (страница восстановится даже при ошибке)
		return () => {
			body.style.position = '';
			body.style.top = '';
			body.style.left = '';
			body.style.right = '';
			body.style.width = '';
			body.style.paddingRight = '';
			body.classList.remove('no-scroll');
			delete body.dataset.scrollY;
		};
	}, [isOpen]);

	const toggleNav = () => setIsOpen(prev => !prev);

	return { isOpen, toggleNav };
};

export default useMobileNav;

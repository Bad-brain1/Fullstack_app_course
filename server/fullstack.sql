-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 18 2023 г., 18:39
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `fullstack`
--

-- --------------------------------------------------------

--
-- Структура таблицы `finance`
--

CREATE TABLE `finance` (
  `id` int NOT NULL,
  `id_user` int NOT NULL,
  `value` text COLLATE utf8mb4_general_ci NOT NULL,
  `text` text COLLATE utf8mb4_general_ci NOT NULL,
  `date_create` date NOT NULL,
  `date_update` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `finance`
--

INSERT INTO `finance` (`id`, `id_user`, `value`, `text`, `date_create`, `date_update`) VALUES
(1, 1, '1000', 'Лента', '2023-05-13', '2023-05-13'),
(4, 2, '12324', 'Чипсы', '2023-05-14', '2023-05-14'),
(6, 2, '4440', 'сухаhbr', '2023-05-14', '2023-05-14'),
(7, 2, '4111', 'Твввв', '2023-05-14', '2023-05-14');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `name_first` varchar(64) NOT NULL,
  `name_last` varchar(64) NOT NULL,
  `token` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name_first`, `name_last`, `token`) VALUES
(1, 'test@test.com', '1234', 'Name', 'SecondName', ''),
(2, 't@dd', '$2b$08$KwYrpiiqheck6UX5L3GvWuYPXI9k4ymDJuks6IL4DxgYgsUTJDLd2', 'nf', 'ns', NULL),
(3, 't@dds', '$2b$08$b4dxwT1P1xRzpWe01j32PeCRuMeHUiHZvkBMN3vyPmsXHZPYTgTyu', 'nf', 'ns', ''),
(4, 'tewqe@d', '$2b$08$zynRWsi8LuHhZVelglBMle7E2FCr29RLe0YbAl.797YUaB7wZ4aj.', 'nf', 'ns', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lX2ZpcnN0IjoibmYiLCJlbWFpbCI6InRAZGQiLCJpYXQiOjE2ODQwNjE5MjEsImV4cCI6MTY4NDA2MTkyM30.UJ3aWApxr8oaYSkpZ5z1K7Yj4_hD9HfR_FFEKVvg8Cg');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `finance`
--
ALTER TABLE `finance`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `id_2` (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `finance`
--
ALTER TABLE `finance`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

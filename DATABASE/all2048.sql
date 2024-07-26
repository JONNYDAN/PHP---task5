-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th7 26, 2024 lúc 07:34 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `all2048`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `games`
--

CREATE TABLE `games` (
  `id_game` int(11) NOT NULL,
  `email_creator` varchar(255) NOT NULL,
  `name_game` varchar(255) NOT NULL,
  `thumbnail_game` varchar(255) NOT NULL,
  `img_1_game` varchar(255) NOT NULL,
  `img_2_game` varchar(255) NOT NULL,
  `img_3_game` varchar(255) NOT NULL,
  `img_4_game` varchar(255) NOT NULL,
  `img_5_game` varchar(255) NOT NULL,
  `img_6_game` varchar(255) NOT NULL,
  `img_7_game` varchar(255) NOT NULL,
  `img_8_game` varchar(255) NOT NULL,
  `img_9_game` varchar(255) NOT NULL,
  `img_10_game` varchar(255) NOT NULL,
  `img_11_game` varchar(255) NOT NULL,
  `img_12_game` varchar(255) NOT NULL,
  `img_13_game` varchar(255) NOT NULL,
  `img_14_game` varchar(255) NOT NULL,
  `img_15_game` varchar(255) NOT NULL,
  `img_16_game` varchar(255) NOT NULL,
  `datetime_game` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `games`
--

INSERT INTO `games` (`id_game`, `email_creator`, `name_game`, `thumbnail_game`, `img_1_game`, `img_2_game`, `img_3_game`, `img_4_game`, `img_5_game`, `img_6_game`, `img_7_game`, `img_8_game`, `img_9_game`, `img_10_game`, `img_11_game`, `img_12_game`, `img_13_game`, `img_14_game`, `img_15_game`, `img_16_game`, `datetime_game`) VALUES
(13, 'tuannobi@gmail.com', 'Cat', 'th.jpg', 'th (1).jpg', 'th (2).jpg', 'th (3).jpg', 'th (4).jpg', 'th (5).jpg', 'th (6).jpg', 'th (7).jpg', 'th (8).jpg', 'th (9).jpg', 'th (10).jpg', 'th (11).jpg', 'th (12).jpg', 'th (13).jpg', 'th (14).jpg', 'th (15).jpg', 'th.jpg', '2024-07-23 14:50:01'),
(24, 'tuannobi@gmail.com', 'Cake', 'birthday-cupcake.jpg', 'caramel-cupcake.jpg', 'christmas-cupcake.jpg', 'gold-cupcake.jpg', 'jumbo-oreo-cupcake.jpg', 'lemon-cupcake.jpg', 'mint-cupcake.jpg', 'pink-champagne-cupcake.jpg', 'pumpkin-cupcake.jpg', 'red-velvet-cupcake.jpg', 'royal-blue-cupcake.jpg', 'strawberry-vanilla-cupcake.jpg', 'th (1).jpg', 'th (3).jpg', 'th (5).jpg', 'th (11).jpg', 'th (14).jpg', '2024-07-24 12:13:39'),
(29, 'tuannobi@gmail.com', 'Dog', 'th (16).jpg', 'th (17).jpg', 'th (18).jpg', 'th (19).jpg', 'th (20).jpg', 'th (22).jpg', 'th (21).jpg', 'th (23).jpg', 'th (24).jpg', 'th (25).jpg', 'th (26).jpg', 'th (27).jpg', 'th (28).jpg', 'th (29).jpg', 'th (30).jpg', 'th (31).jpg', 'th (5).jpg', '2024-07-24 13:31:17');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `rankings`
--

CREATE TABLE `rankings` (
  `id_rank` int(11) NOT NULL,
  `email_player` varchar(255) NOT NULL,
  `id_game` int(11) NOT NULL,
  `score_best` int(11) NOT NULL,
  `max_title` varchar(255) NOT NULL,
  `datetime_play` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `name_user` varchar(255) NOT NULL,
  `email_user` varchar(255) NOT NULL,
  `pass_user` varchar(255) NOT NULL,
  `datetime_user` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id_user`, `name_user`, `email_user`, `pass_user`, `datetime_user`) VALUES
(1, 'Nguyễn Văn Tuấn', 'tuannobi44@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', '2024-07-17 21:23:41');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id_game`);

--
-- Chỉ mục cho bảng `rankings`
--
ALTER TABLE `rankings`
  ADD PRIMARY KEY (`id_rank`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `games`
--
ALTER TABLE `games`
  MODIFY `id_game` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT cho bảng `rankings`
--
ALTER TABLE `rankings`
  MODIFY `id_rank` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

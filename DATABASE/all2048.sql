-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th8 02, 2024 lúc 04:37 PM
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
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id_category` int(11) NOT NULL,
  `name_category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id_category`, `name_category`) VALUES
(1, 'Aesthetics'),
(2, 'Movie'),
(3, 'TV Programs'),
(4, 'Games'),
(5, 'Brands'),
(6, 'Cat'),
(7, 'Dog'),
(8, 'Cake'),
(9, 'Fruit'),
(10, 'Fashion');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `favorites`
--

CREATE TABLE `favorites` (
  `id_favorites` int(11) NOT NULL,
  `id_game` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `favorites`
--

INSERT INTO `favorites` (`id_favorites`, `id_game`, `id_user`) VALUES
(2, 29, 1),
(3, 13, 1),
(5, 32, 14);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `follow`
--

CREATE TABLE `follow` (
  `id_follow` int(11) NOT NULL,
  `id_follower` int(11) NOT NULL,
  `id_following` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `follow`
--

INSERT INTO `follow` (`id_follow`, `id_follower`, `id_following`) VALUES
(4, 1, 14),
(8, 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `games`
--

CREATE TABLE `games` (
  `id_game` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `name_game` varchar(255) NOT NULL,
  `category_game` int(11) NOT NULL,
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

INSERT INTO `games` (`id_game`, `id_user`, `name_game`, `category_game`, `thumbnail_game`, `img_1_game`, `img_2_game`, `img_3_game`, `img_4_game`, `img_5_game`, `img_6_game`, `img_7_game`, `img_8_game`, `img_9_game`, `img_10_game`, `img_11_game`, `img_12_game`, `img_13_game`, `img_14_game`, `img_15_game`, `img_16_game`, `datetime_game`) VALUES
(13, 1, 'Cat', 6, '0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '2024-07-23 14:50:01'),
(29, 1, 'Dog', 7, '0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '2024-07-24 13:31:17'),
(31, 1, 'GDGT1', 10, '0.png', '0.gif', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.gif', '9.png', '10.jpg', '11.jpg', '12.jpeg', '13.jpeg', '14.jpg', '15.jpg', '16.png', '2024-07-30 15:55:32'),
(32, 14, 'Demo1', 10, '0.gif', '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.gif', '10.png', '11.png', '12.png', '13.png', '14.jpg', '15.jpeg', '16.jpg', '2024-07-31 19:35:10');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `rankings`
--

CREATE TABLE `rankings` (
  `id_rank` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_game` int(11) NOT NULL,
  `tile_game` int(11) NOT NULL,
  `score_game` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `datetime_play` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `rankings`
--

INSERT INTO `rankings` (`id_rank`, `id_user`, `id_game`, `tile_game`, `score_game`, `size`, `datetime_play`) VALUES
(1, 1, 31, 256, 1540, 4, '2024-08-01 13:59:14'),
(2, 1, 32, 512, 4896, 5, '2024-08-01 14:53:34'),
(5, 14, 32, 256, 3088, 6, '2024-08-01 15:12:55'),
(6, 1, 13, 32, 264, 4, '2024-08-02 20:45:58');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `name_user` varchar(255) NOT NULL,
  `avatar_user` varchar(255) NOT NULL,
  `email_user` varchar(255) NOT NULL,
  `pass_user` varchar(255) NOT NULL,
  `datetime_user` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id_user`, `name_user`, `avatar_user`, `email_user`, `pass_user`, `datetime_user`) VALUES
(1, 'Nguyễn Văn B', '1.jpg', 'tuannobi44@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', '2024-07-17 21:23:41'),
(14, 'Nguyễn Văn A\r\n', '14.jpg', 'tuannobi@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', '2024-07-29 10:44:24'),
(15, 'Nguyễn Văn C', 'avatar.png', 'tuannobi49@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', '2024-07-29 18:53:19'),
(19, 'Nguyễn Văn E', 'avatar.png', 'tuannobi44@gmail.co', 'ecb52cab66368bbc958e918ab6a83fb8', '2024-08-02 20:58:41');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`);

--
-- Chỉ mục cho bảng `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id_favorites`);

--
-- Chỉ mục cho bảng `follow`
--
ALTER TABLE `follow`
  ADD PRIMARY KEY (`id_follow`);

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
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id_favorites` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `follow`
--
ALTER TABLE `follow`
  MODIFY `id_follow` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `games`
--
ALTER TABLE `games`
  MODIFY `id_game` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT cho bảng `rankings`
--
ALTER TABLE `rankings`
  MODIFY `id_rank` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

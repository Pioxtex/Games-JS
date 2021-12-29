CREATE TABLE `games` (
  `id` int(255) NULL DEFAULT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `score` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `autoClicker` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `clicker` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `shop1` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `shop2` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `shop3` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `shop4` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `shop5` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `shop6` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `shop7` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `shop8` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `shop9` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `shop10` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `shop11` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `shop12` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `shop13` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `shop14` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `shop15` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `shop16` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

INSERT INTO `games` (`id`, `username`, `password`, `score`, `autoClicker`, `clicker`, `shop1`, `shop2`, `shop3`, `shop4`, `shop5`, `shop6`, `shop7`, `shop8`, `shop9`, `shop10`, `shop11`, `shop12`, `shop13`, `shop14`, `shop15`, `shop16`) VALUES
(1, 'pioxtex', '$2y$10$ftxOsxzz3jzJeQab6.hz7eNnDiwbsRA1Wta6vsPTGqhqYij9AG4gS', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
/* pass -> pioxtex */

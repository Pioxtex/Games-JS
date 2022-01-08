CREATE TABLE `millionaires` (
  `id` int(255) NULL DEFAULT NULL AUTO_INCREMENT,
  `question` varchar(255) CHARACTER SET utf8 COLLATE utf8_polish_ci DEFAULT NULL,
  `answer_A` varchar(255) CHARACTER SET utf8 COLLATE utf8_polish_ci DEFAULT NULL,
  `answer_B` varchar(255) CHARACTER SET utf8 COLLATE utf8_polish_ci DEFAULT NULL,
  `answer_C` varchar(255) CHARACTER SET utf8 COLLATE utf8_polish_ci DEFAULT NULL,
  `answer_D` varchar(255) CHARACTER SET utf8 COLLATE utf8_polish_ci DEFAULT NULL,
  `correct_answer` varchar(255) CHARACTER SET utf8 COLLATE utf8_polish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8_polish_ci;

INSERT INTO `millionaires` (`id`, `question`, `answer_A`, `answer_B`, `answer_C`, `answer_D`, `correct_answer`) VALUES
(1, 'Czego nie musi tytułowa Roxanne z piosenki Stinga z 1978 roku?', 'Pracować w policji', 'Zadawać się z Angolami', 'Wycinać w korze serc', 'Sprzedawać swoje ciała', 'D'),
(2, 'Słynny szympans Tytus de Zoo wyszedł spod ręki Papcia Chmiela. W jaki sposób się narodził?', 'z grudki plasteliny', 'z lipowego kijaszka', 'z plamy tuszu', 'z akwarelowych krążków', 'C'),
(3, 'Talia to mitologiczna opiekunka?', 'gier karcianych', 'smukłych kibici', 'komedii', 'wszystkich nauk i sztuk', 'C'),
(4, 'Piąta planeta układu słonecznego to:', 'Saturn', 'Ziemia', 'Jawisz', 'Uran ', 'C'),
(5, 'Ile jest planet w naszym układzie słonecznym na rok 2021?', '7', '8', '9', '10', 'B'),
(6, 'Kiedy rozpoczęło się drugie tysiąclecie?', '1 stycznia 1000 r.', '1 stycznia 1001 r.', '1 stycznia 2000 r.', '1 stycznia 2001 r.', 'B'),
(7, 'Który instrument stroi muzyk?\r\n', 'tamburyn', 'kocioł', 'okarynę', '\r\nczynele', 'B'),
(8, 'Z gry na jakim instrumencie słynie Czesław Mozil?', 'na djembe', 'na kornecie', 'na ksylofonie', 'na akordeonie', 'D'),
(9, 'Ile to jest 1111 razy 1111, jeśli 1 razy 1 to 1, a 11 razy 11 to 121?', '\r\n123 434 321', '111 111 111', '1 234 321', '12321', 'C'),
(10, 'Kto jest mistrzem tego samego oręża, w jakim specjalizowała się mitologiczna Artemida?', 'Legolas', 'Zorro', 'Don Kichot', 'Longinus Podbipięta', 'A'),
(11, 'Komiksowym \"dzieckiem\" rysownika Boba Kane\'a jest:\r\n', 'Captain America', '\r\nSpider-Man', 'Superman', 'Batman', 'D'),
(12, 'Skąd pochodził Conan Barbarzyńca?\r\n', 'z Rivii', 'z Oz', 'z Mordoru', 'z Cimmerii', 'D'),
(13, 'Co według Leszka Kołakowskiego jest sklepieniem domu, w którym duch ludzki mieszka?\r\n', '\r\nRozum', 'Bóg', 'Miłość', 'Czas', 'D'),
(14, 'Odrażający drab z Kabaretu Starszych Panów dubeltówkę weźmie, wyjdzie i...:\r\n', 'rach-ciach!', 'buch, buch!', 'z rur dwóch', 'bum w brzuch', 'B'),
(15, 'Który aktor urodził się w roku opatentowania kinematografu braci Lumière?\r\n', 'Rudolph Valentino', 'Humphrey Bogart', 'Charlie Chaplin', 'Fred Astaire', 'A'),
(16, 'Mowa w obronie poety Archiasza przeszła do historii jako jeden z najświetniejszych popisów retorycznych:', 'Izokratesa', 'Cycerona', '\r\nDemostenesa', 'Kwintyliana', 'B'),
(17, 'Likier maraskino produkuje się z maraski, czyli odmiany:\r\n', 'wiśni', 'jabłoni', '\r\nfigi', '\r\ngruszy', 'A'),
(18, 'Który utwór Juliusza Słowackiego napisany jest prozą?\r\n', '\"Godzina myśli\"', '\r\n\"W Szwajcarii\"', '\"Anhelli\"', '\r\n\"Arab\"', 'C'),
(19, '\"Wątróbka z cebulką (...) jest zakąską doskonałą. Aby ją przyrządzić, należy kupić samochód i pędzić nim póty, aż się kogoś przejedzie\". To Lem i...', '\r\n\"Solaris\"', '\"Opowieści o pilocie Pirxie\"', '\"Dyktanda, czyli...\"', '\"Szpital przemienienia\"', 'C'),
(20, 'Który ssak się nie spoci?\r\n', 'Owca', 'Koń', '\r\nCzłowiek', 'Królik', 'D'),
(21, 'Różańcową tajemnicą chwalebną nie jest...', 'Wniebowzięcie Matki Bożej', 'Zmartwychwstanie Jezusa', 'Śmierć Jezusa na krzyżu', 'Zesłanie Ducha Świętego', 'C');

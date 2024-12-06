SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";



/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `if0_37814601_iottest`
--

-- --------------------------------------------------------

--
-- Table structure for table `bus1`
--

CREATE TABLE `bus1` (
  `id` int(255) NOT NULL,
  `lat` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `lon` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Date` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Time` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `bus1`
--

INSERT INTO `bus1` (`id`, `lat`, `lon`, `Date`, `Time`) VALUES
(1, '1.57', '103.62', '2024-10-23', '00'),
(2, '1.57', '103.62', '2024-10-23', '00'),


-- --------------------------------------------------------
-- Table structure for table `user123`
--

CREATE TABLE `user123` (
  `id` int(255) NOT NULL,
  `username` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Date` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user123`
--

INSERT INTO `user123` (`id`, `username`, `password`, `Date`) VALUES
(1, 'mklmkl', '147', '2024-10-22'),
(2, 'mklmklmkl', '147', '2024-10-22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bus1`
--
ALTER TABLE `bus1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user123`
--
ALTER TABLE `user123`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bus1`
--
ALTER TABLE `bus1`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user123`
--
ALTER TABLE `user123`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

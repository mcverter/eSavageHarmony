CREATE TABLE IF NOT EXISTS `chat_rooms` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `numofuser` int(10) NOT NULL,
  `file` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

INSERT INTO `chat_rooms` VALUES (NULL, 'mula_1', 2, 'mula_1.txt');
INSERT INTO `chat_rooms` VALUES (NULL, 'mula_2', 2, 'mula_2.txt');
INSERT INTO `chat_rooms` VALUES (NULL, 'mula_3', 2, 'mula_3.txt');

CREATE TABLE IF NOT EXISTS `chat_users` (
  `id` tinyint(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `time_mod` int(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

CREATE TABLE IF NOT EXISTS `chat_users_rooms` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `room` varchar(100) NOT NULL,
  `mod_time` int(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1472 ;

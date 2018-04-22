/*
Navicat MySQL Data Transfer

Source Server         : uncars.com
Source Server Version : 50502
Source Host           : 106.3.37.62:3306
Source Database       : bisai

Target Server Type    : MYSQL
Target Server Version : 50502
File Encoding         : 65001

Date: 2018-04-22 17:08:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for wx_accesstoken
-- ----------------------------
DROP TABLE IF EXISTS `wx_accesstoken`;
CREATE TABLE `wx_accesstoken` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(512) NOT NULL,
  `gettime` int(11) NOT NULL,
  `ddate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wx_accesstoken
-- ----------------------------
INSERT INTO `wx_accesstoken` VALUES ('18', '8_xphiF-B1fhvovMXCwCQwuRZsf5HhyLPl-Uoz_QprDbD_fQ-PW8aHfewIGr9wpUxL1zk1D5UicUcIyOe7Fo8pxjmo8Rx5rWIsgXryzqw7V4Pv2_sOMNSIGEK923aL59SjMCNTQ6xOeMZ7hzWPNCNjAEAGVG', '1524210573', '2018-04-20 15:49:33');
INSERT INTO `wx_accesstoken` VALUES ('19', '8_p0-B9RfOAk2YY65LvKfZT8rVA5VQy6PygyCSsGzdgOD7MfPwA74mNCYHLZWbgnzOHtcOjctIoizZbK9ZVX2q6F_5PPG4UIVnbpVMQeC4AArMcZECfP9ki3Om-8o9rl4HVnqGBZqeLwrvJzfdHICgAAAMNH', '1524217698', '2018-04-20 17:48:18');
INSERT INTO `wx_accesstoken` VALUES ('20', '8_9P1T1M_Z5HeJryWCt1_zQLD-Tljg6MS4AsX1j2W-LnCo1Sgp6vROlTBlNL_CYzFkj4NozvKQcRdL802sBnoUf7FIgqO-na1tnR6NP4xeKR_rPATnTomR69zPxT5ntoEwa4tGpLrky6LQzKGpBFAcAHAEID', '1524269333', '2018-04-21 08:08:53');
INSERT INTO `wx_accesstoken` VALUES ('21', '8_LKWZ8ZNRz7POlNQ0vKqw_2FiArmenJ1rm22pUptGrEMxNlHNbWca-e8UnUUBwfAgve-0Z36p3mNtNnlbYg7O2fPmMvTE8d3sXrE0aAYUQUzdMNzNUrWBJ3Zn9Ltz4xmdEhe1teoDuxHLCLPMRRNdAAAUUQ', '1524278907', '2018-04-21 10:48:27');
INSERT INTO `wx_accesstoken` VALUES ('22', '8_qIzS5ggCtS8MLwPjFj6u5k8Y0_6dMyEjkFzyEWzC7JpQcJPQe7dXwdj_5wrAwV85VPTq5jef_oZONLJ7A6lQi547fcqf2tY2qcQ8KG9GAinp3HkB3TCDixUAN3kHGIdAJAMLN', '1524286279', '2018-04-21 12:51:19');
INSERT INTO `wx_accesstoken` VALUES ('23', '8_G-vYTXq7qDBIn0gAzhfFWjc-Jdi8b-jnE0FAaEM5U8RxnQXr31WmQ4Dn0DC081kj4M5JmdqdSGcmiAworJG2lVKXGrRoQL_ba4vNuMkHs9qPkv3SrnCtd2rUJUVA2KP-d0l5aNYPRoLi6iJbOGIcADAKCE', '1524294854', '2018-04-21 15:14:14');
INSERT INTO `wx_accesstoken` VALUES ('24', '9_48hpe7vP79kQ7PNLzHlU4Xqjc76odsTtRKtN7ptvhD7S8qGt1XSqlSRG6kTK0Dcz7yfPEBOMHW5loeXMggCAF8IK9s3_CHGhvzkrcIFslRRWTVnAgEOAwhnkcjMNPSdAAASUX', '1524302916', '2018-04-21 17:28:36');
INSERT INTO `wx_accesstoken` VALUES ('25', '9_YKOFys_QVHEwWIjCjiGUKVkVkSB19PW6mF7w9-WCVp9X2Atss9woKVydCH0FAIktmIoaoI8wWCo9LgCqyRLC-v2l_AUL3_9t8Dk9WzjXPA6XYQJKeuG3f2esoXpmdk9VQgryQWbxusoliNnbHNHgADAXDX', '1524311652', '2018-04-21 19:54:12');
INSERT INTO `wx_accesstoken` VALUES ('26', '9_vn1SZiCC3vApEnWbqNPTRIu2F05GfmfG0Xo42hVZ71RS2xk457W8e5-v-0AVW5dQpdIGBOB84XaVvddQip52iEJaFbhmCTdQcHi8Vb1cOGWED9W2Uozd_OSJHs5cUo69pXWnpnldseEzj6ciEWDfAHAJBI', '1524353445', '2018-04-22 07:30:45');
INSERT INTO `wx_accesstoken` VALUES ('27', '9_IlOyW_nB1flS6oXQ_4q_KGcJA2Txg0kvQpwwehyNSj--Jiz5oqppKLx-oI_zzkPMRP9GV6TpjMzUpCmZIrBN5qd2JSoBM_5nGS81W6tdGgELsJcdMaIPNTKTfaYDFVdAGAGIY', '1524360905', '2018-04-22 09:35:05');
INSERT INTO `wx_accesstoken` VALUES ('28', '9_isHYtzUI6pWCa-NHta9DCr-UMLzt78CS-X6asN1hdJDPZ2QSmidTmOjFiiDVpM3gmHN30Y-qPCQpZrEZfxbnr9p1zrVZy3yBCUOoekotZb20EmnpAcZS6UUntx2pUR608503eK2ofxV2se7BAVPcAJAMHB', '1524370746', '2018-04-22 12:19:06');
INSERT INTO `wx_accesstoken` VALUES ('29', '9_TwrueeDm7XflwPAxP_dkd9Th3LZU1kjC0bMjowbvXLN_dOWyKAj65XBXoUvwNFniwtWsMFf2e8c0eCfEzlALgnvNEoPJoIA5BiaqK-opjpZE5FVOWcZogisFkagp-Z8wLUbNxvnNYpF_MJkINDMhABARHQ', '1524387511', '2018-04-22 16:58:31');

-- ----------------------------
-- Table structure for wx_jpnum
-- ----------------------------
DROP TABLE IF EXISTS `wx_jpnum`;
CREATE TABLE `wx_jpnum` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jiangpinlevel` varchar(255) NOT NULL,
  `total` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wx_jpnum
-- ----------------------------
INSERT INTO `wx_jpnum` VALUES ('1', '1', '7');
INSERT INTO `wx_jpnum` VALUES ('2', '2', '8');
INSERT INTO `wx_jpnum` VALUES ('3', '3', '9');
INSERT INTO `wx_jpnum` VALUES ('4', '4', '3');

-- ----------------------------
-- Table structure for wx_jsticket
-- ----------------------------
DROP TABLE IF EXISTS `wx_jsticket`;
CREATE TABLE `wx_jsticket` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ticket` varchar(512) NOT NULL,
  `gettime` int(11) NOT NULL,
  `ddate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=198 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wx_jsticket
-- ----------------------------
INSERT INTO `wx_jsticket` VALUES ('192', 'HoagFKDcsGMVCIY2vOjf9ksqZcKyWq4WjMErGi9wvJKxL9NuCurC1aGSL-ZAZ7QFk3VozTAQpQmJxmlwe4qMNw', '1524306355', '2018-04-21 18:25:55');
INSERT INTO `wx_jsticket` VALUES ('193', 'HoagFKDcsGMVCIY2vOjf9ksqZcKyWq4WjMErGi9wvJKQ8vbN7Gm4uaynAaUQoa1baH3hFjikKqbkm5XsiqPnDw', '1524313485', '2018-04-21 20:24:45');
INSERT INTO `wx_jsticket` VALUES ('194', 'HoagFKDcsGMVCIY2vOjf9ksqZcKyWq4WjMErGi9wvJLSAGEWOtMIfaL4zeOIun3VzQBUITqK_i0DNOYTnmZsOg', '1524353450', '2018-04-22 07:30:50');
INSERT INTO `wx_jsticket` VALUES ('195', 'HoagFKDcsGMVCIY2vOjf9ksqZcKyWq4WjMErGi9wvJI78KDMXuGQ9rbfKDIogh2msH3_xwiEGfZqOrV6mvVJtQ', '1524360919', '2018-04-22 09:35:19');
INSERT INTO `wx_jsticket` VALUES ('196', 'HoagFKDcsGMVCIY2vOjf9ksqZcKyWq4WjMErGi9wvJI1d57IFb0miaUxoZwrIZIp7YdcRQGKiLSZ0SJ5alVnqQ', '1524370748', '2018-04-22 12:19:08');
INSERT INTO `wx_jsticket` VALUES ('197', 'HoagFKDcsGMVCIY2vOjf9ksqZcKyWq4WjMErGi9wvJLfuSob_RuF3_jExePN3R8PdaLRU5zawdegKa8Iz5z1OQ', '1524387514', '2018-04-22 16:58:34');

-- ----------------------------
-- Table structure for wx_tiku
-- ----------------------------
DROP TABLE IF EXISTS `wx_tiku`;
CREATE TABLE `wx_tiku` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(1024) NOT NULL,
  `stype` tinyint(4) NOT NULL,
  `options` varchar(512) NOT NULL,
  `answer` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wx_tiku
-- ----------------------------
INSERT INTO `wx_tiku` VALUES ('1', '投诉对应的基本理念中规定，针对顾客的投诉，首先应当由厂家担负起妥善处理的责任。\r\n', '0', '对,错', '错');
INSERT INTO `wx_tiku` VALUES ('2', '以下哪项不是投诉对应的基本理念？', '1', '三个基本姿态,三个行动原则,七个基本措施,七个基本步骤', '七个基本措施');
INSERT INTO `wx_tiku` VALUES ('3', '在经销店评价体制-投诉部分中，以下哪项不属于考核内容。', '1', '一般投诉每万台发生件数,投诉每万台发生件数,不积极对应投诉、被S级媒体/主流媒体报道、对品牌形象造成负面影响的案件,不积极对应投诉或推诿责任导致FTMS/其他DLR重大损失（涉及对象车车价1台以上）的案件', '投诉每万台发生件数');
INSERT INTO `wx_tiku` VALUES ('4', '投诉的问题点与车辆的品质相关联的投诉是什么投诉。', '1', '销售投诉,服务投诉,品质投诉,重要投诉', '品质投诉');
INSERT INTO `wx_tiku` VALUES ('5', '一汽丰田顾客投诉对应的目的是为了加强投诉对应中对DLR的指导和沟通，提高投诉对应速度，提高顾客及DLR满意度，进而维护丰田品牌并促进车辆销售。', '0', '对,错', '对');
INSERT INTO `wx_tiku` VALUES ('6', '按照投诉对应基本理念的“七个基本步骤”将以下步骤进行排序，正确的顺序为', '1', '投诉处理及初步分析、寻找原因、判断性质、制定处理方案,寻找原因、判断性质、投诉处理及初步分析、制定处理方案,投诉处理及初步分析、判断性质、制定处理方案、寻找原因,制定处理方案、寻找原因、判断性质、投诉处理及初步分析', '投诉处理及初步分析、寻找原因、判断性质、制定处理方案');
INSERT INTO `wx_tiku` VALUES ('7', '以下哪一项属于投诉对应基本理念“三三七”中的基本姿态。', '1', '认真听取顾客讲话,仔细查看实车、现物、现场，认真检查细节,专业的精神、积极进取、不屈不挠的态度,掌握顾客和车辆的基本情况', '专业的精神、积极进取、不屈不挠的态度');
INSERT INTO `wx_tiku` VALUES ('8', '经销店不能一次性修复、人员对应不当、维修中损坏车辆等造成的顾客投诉是什么。', '1', '销售投诉,服务投诉,品质投诉,重要投诉', '服务投诉');
INSERT INTO `wx_tiku` VALUES ('9', '“经销店未按照投诉对应担当的约定时间联系顾客，导致顾客再次入电投诉的投诉件数”作为因子导入“经销店投诉对应评价体制”，其中，发生件数大于1件/月或大于等于3件/季度，则分数为“0”。', '0', '对,错', '错');
INSERT INTO `wx_tiku` VALUES ('10', '经销店投诉状况反馈体制（WORST10）实施频率是？', '1', '1次/周,1次/月,1次/季度,1次/年', '1次/月');
INSERT INTO `wx_tiku` VALUES ('11', '以下哪一项不属于投诉对应基本理念“三三七”中的行动原则。', '1', '认真听取顾客讲话,仔细查看实车、现物、现场、认真检查细节,充分了解与顾客的交往情况,对明显不合理的要求要果断处理', '对明显不合理的要求要果断处理');
INSERT INTO `wx_tiku` VALUES ('12', '经销店投诉状况反馈体制（WORST10）中，每月将销售投诉发生率WORST 10及服务投诉发生率WORST10经销店的改善拜托函及投诉详细情况发送至____处，并要求经销店反馈改善情况说明（书面）', '1', '销售经理,服务经理,CR经理,总经理', '总经理');
INSERT INTO `wx_tiku` VALUES ('13', '一汽丰田汽车顾客服务中心电话号码为下面的哪一项？', '1', '400-810-1210/800-810-1210,400-810-1211/800-810-1211,400-811-1210/800-811-1210', '400-810-1210/800-810-1210');
INSERT INTO `wx_tiku` VALUES ('14', '下面有关一汽丰田呼叫中心，顾客服务热线服务时间，错误的描述是？', '1', '365天24小时,366天24小时,360天24小时', '360天24小时');
INSERT INTO `wx_tiku` VALUES ('15', '经销店投诉对应评价体制中的两个因子，下面哪一项不是对应的因子？', '1', '一般（销售&服务）投诉发生率,经销店未按照投诉对应担当的约定时间联系顾客，导致顾客再次入电投诉的投诉件数,一年内顾客的投诉总数', '一年内顾客的投诉总数');
INSERT INTO `wx_tiku` VALUES ('16', '在投诉对应-顾客对应体制中经销店的职责： 除了建立顾客对应体制，还要利用投诉案件，进行经销店内部的改善，其中重要投诉应第一时间与哪一部门取得联系，同时应承担与哪一部门沟通的责任？', '1', '顾客关联室 企划培训室,顾客关联室 顾客关联室,企划培训室 顾客关联室', '顾客关联室 顾客关联室');
INSERT INTO `wx_tiku` VALUES ('17', '由于初期对应不当，会造成用户的不满情绪越来越大，进而从最初针对经销店端的不满，扩大到针对厂家的投诉，这个理论被称为什么？', '1', '滚雪球理论,木桶理论,江恩理论', '滚雪球理论');

-- ----------------------------
-- Table structure for wx_user
-- ----------------------------
DROP TABLE IF EXISTS `wx_user`;
CREATE TABLE `wx_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wx_openId` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `employeeno` varchar(255) DEFAULT NULL,
  `realname` varchar(255) DEFAULT '',
  `dati` int(4) DEFAULT '0',
  `tright` int(11) DEFAULT '0',
  `choujiang` tinyint(4) DEFAULT '0',
  `jiangpin` varchar(32) DEFAULT NULL,
  `jpLevel` tinyint(4) DEFAULT NULL,
  `cjtime` datetime DEFAULT NULL,
  `lingjiang` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wx_user
-- ----------------------------
INSERT INTO `wx_user` VALUES ('25', 'ohbc20iZtJneUi0ubJCKLOUIz7EY', '阿斯蒂芬', '阿斯顿', '阿三', '70', '6', '0', '无印良品登机箱', '1', '2018-04-22 16:44:08', '0');
INSERT INTO `wx_user` VALUES ('26', 'ohbc20nWoxGgu0vagYbuulukqpyg', '啦啊', '阿里了', '阿里了', '10', '1', '1', '环保购物袋', '4', '2018-04-22 16:50:52', '0');

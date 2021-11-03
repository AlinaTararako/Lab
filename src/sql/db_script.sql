DROP DATABASE IF EXISTS	`nostradamus`;
create database nostradamus ;

USE `nostradamus`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
		`id` 				INT 				NOT NULL				AUTO_INCREMENT				PRIMARY KEY,
		`email` 			VARCHAR(100) 		NOT NULL 				UNIQUE,
		`password` 			VARCHAR(100)		NOT NULL
);

DROP TABLE IF EXISTS `roles`;					
CREATE TABLE `roles`(
		`id` 				INT 				NOT NULL				AUTO_INCREMENT				PRIMARY KEY,
		`name` 				VARCHAR(50) 		NOT NULL
);

DROP TABLE IF EXISTS `users_roles`;
CREATE TABLE `users_roles`(
		`id` 				INT					NOT NULL				AUTO_INCREMENT				PRIMARY KEY,
		`user_id` 			INT 				NOT NULL, 
		`role_id` 			INT 				NOT NULL
);

DROP TABLE IF EXISTS `wallets`;
CREATE TABLE `wallets`(
		`id` 				INT 				NOT NULL				AUTO_INCREMENT				PRIMARY KEY,
		`user_id` 			INT 				NOT NULL, 
		`score` 			INT 				NOT NULL
);

DROP TABLE IF EXISTS `users_info`;
CREATE TABLE `users_info`(
		`id`				INT					NOT NULL				AUTO_INCREMENT				PRIMARY KEY,
		`user_id` 			INT 				NOT NULL, 
		`name` 				VARCHAR(50) 		NOT NULL,
		`image` 			VARCHAR(255),
		`gender` 			VARCHAR(1) 		NOT NULL,
		`birthday` 			datetime 			NOT NULL
);

DROP TABLE IF EXISTS `events`;
CREATE TABLE `events`(
		`id` 				INT 				NOT NULL				AUTO_INCREMENT				PRIMARY KEY,
		`name` 				VARCHAR(50) 		NOT NULL,
		`create_at` 		DATETIME 			NOT NULL,
		`start_date`		DATETIME 			NOT NULL,
		`end_date` 			DATETIME 			NOT NULL,
		`description` 		TEXT 				NOT NULL
);

DROP TABLE IF EXISTS `bets`;
CREATE TABLE `bets`(
		`id` 				INT 				NOT NULL				AUTO_INCREMENT				PRIMARY KEY,
		`name` 				VARCHAR(50) 		NOT NULL,
		`event_id` 			INT 				NOT NULL, 
		`coefficient` 		INT 				NOT NULL,
        `win` 				BOOLEAN 			NOT NULL
);

DROP TABLE IF EXISTS `users_bets`;
CREATE TABLE `users_bets`(
		`id` 				INT 				NOT NULL				AUTO_INCREMENT				PRIMARY KEY,
		`user_id` 			INT 				NOT NULL, 
		`bet_id` 			INT 				NOT NULL,
        `sum`				INT					NOT NULL
);

DROP TABLE IF EXISTS `history_operations`;
CREATE TABLE `history_operations`(
		`id`				INT 				NOT NULL				AUTO_INCREMENT				PRIMARY KEY,
		`wallet_id` 		INT 				NOT NULL, 
		`description` 		TEXT 				NOT NULL,
		`score` 			INT 				NOT NULL
);

ALTER TABLE users_info
		ADD CONSTRAINT FK_user_info_user_id_users_id
		FOREIGN KEY(user_id) REFERENCES users(id)
			ON DELETE CASCADE 
			ON UPDATE CASCADE;

ALTER TABLE users_roles
		ADD CONSTRAINT FK_user_roles_user_id_users_id
		FOREIGN KEY(user_id) REFERENCES users(id)
			ON DELETE CASCADE 
			ON UPDATE CASCADE;
        
ALTER TABLE users_roles
		ADD CONSTRAINT FK_users_roles_role_id_roles_id
		FOREIGN KEY(role_id) REFERENCES roles(id)
			ON DELETE CASCADE 
			ON UPDATE CASCADE;

ALTER TABLE bets
		ADD CONSTRAINT FK_bets_event_id_events_id
		FOREIGN KEY(event_id) REFERENCES events(id)
			ON DELETE CASCADE 
			ON UPDATE CASCADE;
            
 ALTER TABLE wallets
		ADD CONSTRAINT FK_wallets_user_id_users_id
		FOREIGN KEY(user_id) REFERENCES users(id)
			ON DELETE CASCADE 
			ON UPDATE CASCADE;
            
ALTER TABLE users_bets
		ADD CONSTRAINT FK_users_bets_user_id_users_id
		FOREIGN KEY(user_id) REFERENCES users(id)
			ON DELETE CASCADE 
			ON UPDATE CASCADE;
            
ALTER TABLE users_bets
		ADD CONSTRAINT FK_users_bets_bet_id_bets_id
		FOREIGN KEY(bet_id) REFERENCES bets(id)
			ON DELETE CASCADE 
			ON UPDATE CASCADE;

ALTER TABLE history_operations
		ADD CONSTRAINT FK_history_operations_wallet_id_wallets_id
		FOREIGN KEY(wallet_id) REFERENCES wallets(id)
			ON DELETE CASCADE 
			ON UPDATE CASCADE;
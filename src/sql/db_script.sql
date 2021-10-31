DROP DATABASE IF EXISTS	`nostradamus`;
create database nostradamus ;

USE `nostradamus`;

create table `users` (
`id` INT NOT NULL,
`email` VARCHAR(100) NOT NULL UNIQUE,
`password` VARCHAR(100) NOT NULL,

	PRIMARY KEY (`id`)
);


CREATE TABLE `roles`(
	`id` INT NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    
    PRIMARY KEY (`id`)
);


CREATE TABLE `users_roles`(
	`id` INT NOT NULL,
    `user_id` INT NOT NULL, 
	`role_id` INT NOT NULL,
    
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) references `users`(`id`),
    FOREIGN KEY (`role_id`) references `roles`(`id`)
);

CREATE TABLE `wallets`(
	`id` INT NOT NULL,
    `user_id` INT NOT NULL, 
    `score` INT NOT NULL,
    
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) references `users`(`id`)
    
);

CREATE TABLE `users_info`(
	`id` INT NOT NULL,
    `user_id` INT NOT NULL, 
	`name` VARCHAR(50) NOT NULL,
    `image` VARCHAR(255),
    `gender` VARCHAR(50) NOT NULL,
    `birthday` datetime NOT NULL,
    `wallet_id` INT NOT NULL,
    
    
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) references `users`(`id`),
    FOREIGN KEY (`wallet_id`) references `wallets`(`id`)
);

CREATE TABLE `events`(
	`id` INT NOT NULL,
	`name` VARCHAR(50) NOT NULL,
    `create_at` datetime NOT NULL,
    `start_date` datetime NOT NULL,
    `end_date` datetime NOT NULL,
    `description` TEXT NOT NULL,
    `probability` decimal NOT NULL,
    
    PRIMARY KEY (`id`)
);

CREATE TABLE `bets`(
	`id` INT NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `event_id` INT NOT NULL, 
    `wallet_id` INT NOT NULL, 
    
    PRIMARY KEY (`id`),
	FOREIGN KEY (`event_id`) references `events`(`id`),
    FOREIGN KEY (`wallet_id`) references `wallets`(`id`)
);

CREATE TABLE `users_bets`(
	`id` INT NOT NULL,
    `user_id` INT NOT NULL, 
	`bet_id` INT NOT NULL,
    
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) references `users`(`id`),
    FOREIGN KEY (`bet_id`) references `bets`(`id`)
);

CREATE TABLE `history_operations`(
	`id` INT NOT NULL,
    `wallet_id` INT NOT NULL, 
    `description` TEXT NOT NULL,
    `score` INT NOT NULL,
    
    PRIMARY KEY (`id`),
    FOREIGN KEY (`wallet_id`) references `wallets`(`id`)
);


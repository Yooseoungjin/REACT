--디비 생성
CREATE DATABASE mydb default CHARACTER SET UTF8;

--CREATE USER 사용자계정 identified by '비밀번호';
CREATE USER USER01 identified by '1234'; --계정만들지만 권한 없음

-- 권한을 부여해야한다. 
GRANT ALL PRIVILEGES ON mydb.* TO USER01@localhost identified by '1234';


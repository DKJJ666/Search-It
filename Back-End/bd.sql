CREATE DATABASE IF NOT EXISTS searchit;
USE searchit;

CREATE TABLE IF NOT EXISTS recibos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero_recibo VARCHAR(50) NOT NULL,
    data_emissao DATETIME NOT NULL,

    nome_cliente VARCHAR(100) NOT NULL,      
    documento_cliente VARCHAR(20) NOT NULL,  
    valor DECIMAL(10, 2) NOT NULL,           
    

    cep VARCHAR(10) NOT NULL,
    logradouro VARCHAR(255) NOT NULL,        
    numero VARCHAR(20) NOT NULL,             
    complemento VARCHAR(255),                
    bairro VARCHAR(100) NOT NULL,            
    cidade VARCHAR(100) NOT NULL,            
    estado VARCHAR(2) NOT NULL,               
    ponto_referencia VARCHAR(255)            
);

DROP DATABASE searchit;
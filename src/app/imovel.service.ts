import { Injectable } from '@angular/core';
import { Imovel } from './imovel';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

    private imoveisDB: Imovel[] = [
        {
            "id": 1,
            "url_foto": "1.jpg",
            "nome": "Sobrado lindo",
            "cidade": "Paris",
            "estado": "França",
            "tipoImovel": "Casa",
            "favorito": false,
            "latitude": "48.8566",
            "longitude": "2.3522",
            "valor": 450000.00,
            "adicionais": [
                {
                    "chave": "Quartos disponiveis",
                    "valor": 4
                },
                {
                    "chave": "Piscina",
                    "valor": "sim"
                }
            ],
            "aluguel":[
                {
                    "chave":"Aluguel Mensal",
                    "valor": 4500.00
                }
                
            ]
        },
        {
            "id": 2,
            "url_foto": "2.jpg",
            "nome": "Kitnet Economico",
            "cidade": "Nova Iorque",
            "estado": "Estados Unidos",
            "tipoImovel": "Apartamento",
            "favorito": false,
            "latitude": "40.7128",
            "longitude": "-74.0060",
            "valor": 100000.00,
            "adicionais": [
                {
                    "chave": "Banheiro",
                    "valor": 1
                }
            ],
            "aluguel":[
                {
                    "chave":"Aluguel Anual",
                    "valor": 50.000
                }
            ]
        },
        {
            "id": 3,
            "url_foto": "3.jpg",
            "nome": "Casarão na floresta",
            "cidade": "Rio de Janeiro",
            "estado": "Brasil",
            "tipoImovel": "Casa",
            "favorito": false,
            "latitude": "-22.9068",
            "longitude": "-43.1729",
            "valor": 450000.00,
            "adicionais": [
                {
                    "chave": "Quartos disponiveis",
                    "valor": 10
                },
                {
                    "chave": "Quintal",
                    "valor": "sim"
                },
                {
                    "chave": "Arvores",
                    "valor": "Bastante"
                }
            ],
            "aluguel":[
               {
                "chave":"Aluguel Mensal",
                "valor": 1500.00
               }
            ]
        },
        {
            "id": 4,
            "url_foto": "4.jpg",
            "nome": "Casa na Praia",
            "cidade": "Los Angeles",
            "estado": "Estados Unidos",
            "tipoImovel": "Casa",
            "favorito": false,
            "latitude": "34.0522",
            "longitude": "-118.2437",
            "valor": 450000.00,
            "adicionais": [
                {
                    "chave": "Piscina",
                    "valor": "não"
                },
                {
                    "chave": "Jardim",
                    "valor": "sim"
                }
            ],
            "aluguel":[]

        },
        {
            "id": 5,
            "url_foto": "5.jpg",
            "nome": "Casa Jardim",
            "cidade": "Londres",
            "estado": "Reino Unido",
            "tipoImovel": "Casa",
            "favorito": false,
            "latitude": "51.5074",
            "longitude": "-0.1278",
            "valor": 450000.00,
            "adicionais": [
                {
                    "chave": "Garagem",
                    "valor": "2 vagas"
                }
            ],
            "aluguel":[]
        },
        {
            "id": 6,
            "url_foto": "6.jpg",
            "nome": "Casa dos Sonhos",
            "cidade": "Sydney",
            "estado": "Austrália",
            "tipoImovel": "Casa",
            "favorito": false,
            "latitude": "-33.8688",
            "longitude": "151.2093",
            "valor": 4350000.00,
            "adicionais": [
                {
                    "chave": "Quintal",
                    "valor": "grande"
                }
            ],
            "aluguel": []
        },
        {
            "id": 7,
            "url_foto": "7.jpg",
            "nome": "Casa Aconchegante",
            "cidade": "Tóquio",
            "estado": "Japão",
            "tipoImovel": "Casa",
            "favorito": false,
            "latitude": "35.6895",
            "longitude": "139.6917",
            "valor": 683000.00,
            "adicionais": [
                {
                    "chave": "Área de lazer",
                    "valor": "piscina e churrasqueira"
                }
            ],
            "aluguel":[]
        },
        {
            "id": 8,
            "url_foto": "8.jpg",
            "nome": "Apartamento Moderno",
            "cidade": "Dubai",
            "estado": "Emirados Árabes Unidos",
            "tipoImovel": "Casa",
            "favorito": false,
            "latitude": "25.2769",
            "longitude": "55.2963",
            "valor": 250000.00,
            "adicionais": [
                {
                    "chave": "Segurança",
                    "valor": "portaria 24h"
                }
            ],
            "aluguel":[]
        },
        {
            "id": 9,
            "url_foto": "9.jpg",
            "nome": "Apartamento Confortável",
            "cidade": "Hong Kong",
            "estado": "China",
            "tipoImovel": "Apartamento",
            "favorito": false,
            "latitude": "22.3193",
            "longitude": "114.1694",
            "valor": 1450000.00,
            "adicionais": [
                {
                    "chave": "Academia",
                    "valor": "sim"
                }
            ],
            "aluguel":[]
        },
        {
            "id": 10,
            "url_foto": "10.jpg",
            "nome": "Casa Charmosa",
            "cidade": "Cidade do Cabo",
            "estado": "África do Sul",
            "tipoImovel": "Casa",
            "favorito": false,
            "latitude": "-33.9249",
            "longitude": "18.4241",
            "valor": 850000.00,
            "adicionais": [
                {
                    "chave": "Vista panorâmica",
                    "valor": "serra"
                }
            ],
            "aluguel":[]
        }
    ];
    


buscarTodosImoveis() {
    return this.imoveisDB
}

buscarImovelPeloId(id: number) : Imovel | undefined {
    let imovel;
    
    for (let i=0; i < this.imoveisDB.length; i++) {
        imovel = this.imoveisDB[i];

        if (imovel.id == id) { 
            break
        }
    }
    return imovel
}
    
}

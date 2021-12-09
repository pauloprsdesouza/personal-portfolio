import React from 'react';
import "../Home/style.css"

function Introduction() {
    return (
        <div className="card mb-2 card-shadow border-0">
            <div className="card-body">
                <div className="row justify-content-center">
                    <div className="col-auto col-lg-2">
                        <img className="img-cirle card-shadow" src="https://personal-portfolio-files.s3.amazonaws.com/img/photo-introduction.jpeg" />
                    </div>
                    <div className="col-auto col-lg-10">
                        <h1 className="text-center text-lg-start">Paulo Roberto de Souza</h1>
                        <p className="text-justify">É desenvolvedor full-stack web e mobile, cientista e pesquisador na área de ciência de dados em Sistemas de Recomendação. É Doutorando e Mestre em Ciência da Computação pela <a className="text-decoration-none" href="https://pgcomp.ufba.br/">UFBA - Universidade Federal da Bahia</a>. Em paralelo, está cursando a pós em Computação Forense e Segurança da Informação, bem como a pós em Executivo em Business Analytics pelo <a className="text-decoration-none" href="https://ipog.edu.br">IPOG - Instituto de Pós-Graduação</a>. Especialista em Perícias Criminais e Ciências Forenses, com foco em Computação Forense pela <a className="text-decoration-none" href="https://unit.br">UNIT - Universidade Tiradentes</a>. Mais cedo, cursou o MBA em Administração em Banco de Dados pela <a className="text-decoration-none" href="https://fanese.edu.br">FANESE - Faculdade de Administração e Negócios de Sergipe</a>. Graduado em Computação pela <a className="text-decoration-none" href="https://unit.br">UNIT - Universidade Tiradentes</a>, já atuou no mercado de trabalho desenvolvendo aplicações mobile e web no contexto da segurança pública, jurídico e acadêmico.</p>
                        <div className="text-center text-lg-start">
                            <a className="btn btn-outline-primary btn-sm"
                                href="https://personal-portfolio-files.s3.amazonaws.com/img/profile-contact.vcf"
                                download="contact.vcf"
                                rel="noopener noreferrer">Salvar Contato</a>

                            <a className="btn btn-outline-secondary btn-sm ms-2"
                                href="http://lattes.cnpq.br/6583921321802015"
                                target="_blank"
                                rel="noopener noreferrer">Currículo Lattes</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
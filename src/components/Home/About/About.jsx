import React from 'react';

const About = function () {
    return (
        <div className="card card-education-teste mb-5 shadow">
            <div className="card-body text-white">
                <h1 className="section-title mb-3">biographical sketch.</h1>
                <p className="lead text-justify mb-3">
                    He is a web and mobile full-stack developer, scientist, and researcher in the Recommender Systems area. He is a doctoral's degree student and a master's degree in Computer Science at the
                    &nbsp;<a className="text-decoration-none text-white" href="https://pgcomp.ufba.br/" target="_blank" rel="noopener noreferrer">UFBA - Federal University of Bahia</a>
                    . Besides that, in parallel, he is also a post-graduate degree student in both MBA in Executive Business Analytics and Computer Forensics and Information Security at
                    &nbsp;<a className="text-decoration-none text-white" href="https://ipog.edu.br" target="_blank" rel="noopener noreferrer">IPOG - Postgraduate Institute</a>
                    . He is a post-graduate in Criminal Forensics and Forensic Science with focusing on computer forensics at
                    &nbsp;<a className="text-decoration-none text-white" href="https://unit.br" rel="noopener noreferrer">UNIT - Tiradentes University</a>
                    . Earlier, he concluded an MBA in Database Administration at the
                    &nbsp;<a className="text-decoration-none text-white" href="https://fanese.edu.br" target="_blank" rel="noopener noreferrer">FANESE - Faculty of Business and Administration of Sergipe</a>
                    . Firstly, he concluded a bachelor's degree in Computing at
                    &nbsp;<a className="text-decoration-none text-white" href="https://unit.br" rel="noopener noreferrer">UNIT - Tiradentes University</a>
                    . He already worked developing mobile and web applications in the public security context, law, and academic.
                </p>
                <div className="d-flex flex-row gap-3">
                    <div className="text-center text-lg-start">
                        <a className="btn btn-outline-light"
                            href="http://lattes.cnpq.br/6583921321802015"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Lattes Curriculum</a>
                    </div>
                    <div className="text-center text-lg-start">
                        <a className="btn btn-outline-light"
                            href="https://personal-portfolio-files.s3.amazonaws.com/CV_Paulo_Roberto_de_Souza.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >PT-BR Curriculum</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
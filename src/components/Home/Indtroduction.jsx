import React from 'react';
import "../Home/style.css"

function Introduction() {

    return (
        <div className="card mb-2 card-shadow border-0">
            <div className="card-body">
                <div className="row justify-content-center">
                    <div className="col-auto col-md-4 col-lg-3 text-center px-5 mb-3">
                        <img className="img-cirle-md card-shadow mb-3" src="https://personal-portfolio-files.s3.amazonaws.com/img/photo-introduction.jpeg" width="200" height="200" alt="Paulo Roberto de Souza" />
                        <ul className="nav justify-content-between list-unstyled d-flex ">
                            <li className="ms-3">
                                <a className="text-purple" href="https://github.com/pauloprsdesouza" rel="noopener noreferrer"><i className="fab fa-github-alt fa-2x"></i></a>
                            </li>
                            <li className="ms-3">
                                <a className="text-purple" href="https://www.linkedin.com/in/pauloprsdesouza" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-2x"></i></a>
                            </li>
                            <li className="ms-3">
                                <a className="text-purple" href="https://instagram.com/pauloprsdesouza" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto col-md-8 col-lg-9">
                        <h1 className="text-center text-lg-start">Paulo Roberto de Souza</h1>
                        <p className="text-justify">He is a web and mobile full-stack developer, scientist, and researcher in the Recommender Systems area. He is a doctoral's degree student and a master's degree in Computer Science at the <a className='text-decoration-none' href='https://pgcomp.ufba.br/' target='_blank' rel='noopener noreferrer'>UFBA - Federal University of Bahia</a>. Besides that, in parallel, he is also a post-graduate degree student in both MBA in Executive Business Analytics and Computer Forensics and Information Security at <a className='text-decoration-none' href='https://ipog.edu.br' target='_blank' rel='noopener noreferrer'>IPOG - Postgraduate Institute</a>. He is a post-graduate in Criminal Forensics and Forensic Science with focusing on computer forensics at <a className='text-decoration-none' href='https://unit.br' rel='noopener noreferrer'>UNIT - Tiradentes University</a>. Earlier, he concluded an MBA in Database Administration at the <a className='text-decoration-none' href='https://fanese.edu.br' target='_blank' rel='noopener noreferrer'>FANESE - Faculty of Business and Administration of Sergipe</a>. Firstly, he concluded a bachelor's degree in Computing at <a className='text-decoration-none' href='https://unit.br' rel='noopener noreferrer'>UNIT - Tiradentes University</a>. He already worked developing mobile and web applications in the public security context, law, and academic.</p>
                        <div className="text-center text-lg-start">
                            <a className="btn btn-outline-secondary btn-sm"
                                href="https://personal-portfolio-files.s3.amazonaws.com/img/profile-contact.vcf"
                                download="contact.vcf"
                                rel="noopener noreferrer">Save Contact</a>

                            <a className="btn btn-outline-secondary btn-sm ms-2"
                                href="http://lattes.cnpq.br/6583921321802015"
                                target="_blank"
                                rel="noopener noreferrer">Lattes Curriculum</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
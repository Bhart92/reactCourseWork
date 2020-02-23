import React, {useContext, useEffect} from 'react';
import ProjectContext from '../context/projectContext';
import Loader from 'react-loaders'


const ProjectPageList = () => {
    const projects = useContext(ProjectContext); 
    const onImagesLoaded = (container, event) =>{
        const images = container.getElementsByTagName("img");
        let loaded = images.length;
        for (let i = 0; i < images.length; i++) {
            if (images[i].complete) {
                loaded--;
            }
            else {
                images[i].addEventListener("load", function() {
                    loaded--;
                    if (loaded == 0) {
                        event();
                    }
                });
            }
            if (loaded == 0) {
                event();
            }
        }
    }      
    useEffect(() => {            
        const container = document.getElementsByTagName("body")[0];   
       onImagesLoaded(container, () => {
            const loaders = Array.from(document.getElementsByClassName('loader'));
            const imgArray = Array.from(document.getElementsByTagName('img'));
            let delay = -.1;
            loaders.forEach((loader)=> {
                loader.style.display = 'none'
            })
            imgArray.forEach((img)=> {
                delay += .1;
                img.style.opacity = '1'
                img.style.top = '0'
                img.style.transitionDelay = `${delay}s`;
            })
        });
    }, []);
    return (
       < ProjectContext.Provider>
    <div className="projects">{projects.map((projects) => {
        return (
        <div key={projects.title} className='projects--container'>
            <div className='projects-details'>
                <h1 className='projects--title'><a className='projects--title__link' href={projects.url}>{projects.title}</a></h1>
                <span className='projects--tech'>{projects.tech}</span>
                <p className='projects--description'>{projects.description}.</p>
            </div>
            <div className='projects--image-container'>
                <Loader type="ball-grid-pulse" />
                <a className='projects--image--link' href={projects.url}><img className='projects--image' src={projects.image} alt={projects.imageAlt}/></a>
            </div>
            <hr />
        </div>
            );
    })}
    </div>
    </ProjectContext.Provider>

    );

};


export default ProjectPageList;
export const updateMetaTags = (title, description) => {
    document.title = `${title} | John Bennette Portfolio`;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;
  };
  
  export const defaultMetaTags = {
    home: {
      title: 'Home',
      description: 'IT Professional specializing in innovative technical solutions, AI automation, and digital transformation'
    },
    education: {
      title: 'Education',
      description: 'Educational background and certifications in IT, including CompTIA certifications and formal education'
    },
    about: {
      title: 'About',
      description: 'Learn more about my professional journey, skills, and expertise in IT and automation'
    },
    contact: {
      title: 'Contact',
      description: 'Get in touch with me to discuss opportunities, collaborations, or just have a conversation about technology'
    }
  };
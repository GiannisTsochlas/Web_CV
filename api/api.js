const d = document
export const html = {
  nav: d.querySelector('[data-nav-menu]'),
  toggle: d.querySelector(`[data-toggle-btn] *`),
  navLinks: d.querySelectorAll(`[data-nav-link] *`),
  allSections: d.querySelectorAll(`[data-section-id][id]`),
  profileImg: d.querySelector(`[user-img]`),
  scrolltop: d.querySelector(`[data-scrolltop-btn]`),
  themeBtn: d.querySelector('[data-theme-btn]'),
  deskDownloadBtn: d.querySelector('[desk-download-btn]'),
  mobDownloadBtn: d.querySelector('[mob-download-btn]'),
  areaCv: d.querySelector('[data-area-cv]'),
  inputs: d.querySelectorAll('input'),
}

export const sections = {
  homesection: d.querySelector('[home]'),
  socialSection: d.querySelector('[social]'),
  contactSection: d.querySelector('[contact]'),
  profileSection: d.querySelectorAll('[profile]'),
  educationSection: d.querySelectorAll('[education]'),
  skillsSection: d.querySelectorAll('[skills]'),
  experienceSection: d.querySelectorAll('[experience]'),
  certificatesSection: d.querySelectorAll('[certificates]'),
  referencesSection: d.querySelectorAll('[references]'),
  languagesSection: d.querySelectorAll('[languages]'),
  interestsSection: d.querySelectorAll('[interests]')
}

export function getItems() {
  return new Promise((resolve, reject) => {
    const get = () => {
      const obj = {
        educationItems: d.querySelectorAll('[education-item]'),
        experienceItems: d.querySelectorAll('[experience-item]')
      }
      return obj
    }
    resolve( get() )
  })
}

export const form = {
  btn: d.querySelector('[data-form-btn]'),
  panel: d.querySelector('[data-form-panel]'),
  bg: d.querySelector('[data-bg-panel]')
}

/*==================== DISABLE FIELDS ====================*/
export function getDisables() {
  return new Promise((resolve, reject) => {
    const get = () => {
      const obj = {
        label: d.querySelectorAll('.label_disable'),
        enable: d.querySelectorAll('.bx-undo'),
        disable: d.querySelectorAll('.bx-trash-alt'),
        input: d.querySelectorAll('.input_disable'),
        user: d.querySelectorAll('.info_disable')
      }
      return obj
    }
    resolve( get() )
  })
}

/*====================OBJECTS WITH HTML GROUP REFERENCES INTERACTING WITH THE FORM====================*/
export function getContacts() {
  return new Promise((resolve, reject) => {
    const get = () => {
      const obj = {
        // ============ USER CONTACTS =============
        userLocation: document.querySelector('[user-location]'),
        userEmail: document.querySelector('[user-email]'),
        userPhone: document.querySelector('[user-phone]'),
        userLinkedin: document.querySelector('[user-linkedin]'),
        userGithub: document.querySelector('[user-github]'),
        userWebsite: document.querySelector('[user-website]'),
        // ============ FORM CONTACTS =============
        inputLocation: document.querySelector('[input-location]'),
        inputEmail: document.querySelector('[input-email]'),
        inputPhone: document.querySelector('[input-phone]'),
        inputLinkedin: document.querySelector('[input-linkedin]'),
        inputGithub: document.querySelector('[input-github]'),
        inputWebsite: document.querySelector('[input-website]')
      }
      return obj
    }
    resolve( get() )
  })
}


export const home = {
  // ============ HOME USER DATA =============
  userName: d.querySelector('[user-name]'),
  userProfession: d.querySelector('[user-profession]'),
  menuName: d.querySelector('[menu-name]'),
  // ============ HOME FORM DATA =============
  inputName: d.querySelector('[input-name]'),
  inputLastname: d.querySelector('[input-lastname]'),
  inputProfession: d.querySelector('[input-profession]')
}

export const profile = {
  // ============ USER PROFILE =============
  userProfile: d.querySelector('[user-profile]'),
  // ============ FORM PROFILE =============
  textProfile: d.querySelector('[text-profile]'),
  addProfile: d.querySelector('[add-profile]')
}

export function getEducation() {
  return new Promise((resolve, reject) => {
    const get = () => {
      const obj = {
        // ============ FORM EDUCATION =============
        title: d.querySelector('[education-title]'),
        institute: d.querySelector('[education-institute]'),
        year: d.querySelector('[education-year]'),
        // ============ EDUCATION ELEMENT =============
        container: d.querySelector('[education-container]'),
        add: d.querySelector('[add-education]'),
        undo: d.querySelector('[undo-education]')
      }
      return obj
    }
    resolve ( get() )
  })
}

export function getExperience() {
  return new Promise((resolve, reject) => {
    const get = () => {
      const obj = {
        // ============ FORM EXPERIENCE =============
        title: d.querySelector('[experience-title]'),
        institute: d.querySelector('[experience-institute]'),
        description: d.querySelector('[experience-description]'),
        // ============ EXPERIENCE ELEMENT =============
        container: d.querySelector('[experience-container]'),
        add: d.querySelector('[add-experience]'),
        undo: d.querySelector('[undo-experience]')
      }
      return obj
    }
    resolve ( get() )
  })
}

export function getCertificates() {
  return new Promise((resolve, reject) => {
    const get = () => {
      const obj = {
        // ============ FORM EXPERIENCE =============
        title: d.querySelector('[certificate-title]'),
        description: d.querySelector('[certificate-description]'),
        // ============ EXPERIENCE ELEMENT =============
        container: d.querySelector('[certificate-container]'),
        add: d.querySelector('[add-certificate]'),
        undo: d.querySelector('[undo-certificate]')
      }
      return obj
    }
    resolve ( get() )
  })
}

export function getLanguages() {
  return new Promise((resolve, reject) => {
    const get = () => {
      const obj = {
        // ============ FORM EXPERIENCE =============
        name: d.querySelector('[language-name]'),
        // ============ EXPERIENCE ELEMENT =============
        container: d.querySelector('[languages-container]'),
        add: d.querySelector('[add-language]'),
        undo: d.querySelector('[undo-language]')
      }
      return obj
    }
    resolve ( get() )
  })
}

export function getSkills() {
  return new Promise((resolve, reject) => {
    const get = () => {
      const obj = {
        // ============ FORM EXPERIENCE =============
        name: d.querySelector('[skill-name]'),
        // ============ EXPERIENCE ELEMENT =============
        container: d.querySelector('[skills-container]'),
        add: d.querySelector('[add-skill]'),
        undo: d.querySelector('[undo-skill]')
      }
      return obj
    }
    resolve ( get() )
  })
}

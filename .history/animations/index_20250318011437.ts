export const speakerAnimation = {
  initial: { opacity: 0 },

  enter: {
    opacity: 1,
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
  },

  closed: {
    opacity: 0,
    transition: { duration: 0.7, ease: [0.3, 0, 0.7, 0] },
  },
};


export const agendaAnimation = {
  initial: { opacity: 0, x: "20%" },

  enter: {
    opacity: 1,
    x: "0%",
    transition: { duration: 0.4, ease: [0.7, 0, 0.3, 1] },
  },

  closed: {
    opacity: 0,
    x: "-20%",
    transition: { duration: 0.4, ease: [0.3, 0, 0.7, 0] },
  },
};

const sideBarAnimation = {
  initial: {clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"},

  enter: {
    ci
  }
}

//polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);


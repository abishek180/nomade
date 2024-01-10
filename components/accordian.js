import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
const Accordian = () => {
    const [open, setOpen] = React.useState(0);
 
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
   
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)} className="text-[#080C2E] text-[20px] font-bold dark:text-white">Besoin & Audit</AccordionHeader>
          <AccordionBody>
            <p className="text-[#5D5D7C] text-[16px] font-medium leading-8 dark:text-white">Définition des objectifs de communication et recommandations (message, visuel, outils et supports de diffusion, cahier des charges...)</p>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)} className="text-[#080C2E] text-[20px] font-bold dark:text-white">
          Production & réalisation
          </AccordionHeader>
          <AccordionBody>
           <p className="text-[#5D5D7C] text-[16px] font-medium leading-8 dark:text-white">Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments</p>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)} className="text-[#080C2E] text-[20px] font-bold dark:text-white">
          Recommandations,
          </AccordionHeader>
          <AccordionBody>
          <p className="text-[#5D5D7C] text-[16px] font-medium leading-8 dark:text-white">Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments</p>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)} className="text-[#080C2E] text-[20px] font-bold dark:text-white">
          Lancement & diffusion
          </AccordionHeader>
          <AccordionBody>
          <p className="text-[#5D5D7C] text-[16px] font-medium leading-8 dark:text-white">Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments</p>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(5)} className="text-[#080C2E] text-[20px] font-bold dark:text-white">
          Conception & création
          </AccordionHeader>
          <AccordionBody>
          <p className="text-[#5D5D7C] text-[16px] font-medium leading-8 dark:text-white">Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments</p>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(6)} className="text-[#080C2E] text-[20px] font-bold dark:text-white">
          analyse & suivi 
          </AccordionHeader>
          <AccordionBody>
          <p className="text-[#5D5D7C] text-[16px] font-medium leading-8 dark:text-white">Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments</p>
          </AccordionBody>
        </Accordion>
      </div>
    )
}

export default Accordian
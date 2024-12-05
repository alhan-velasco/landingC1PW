import { Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  characters = [
    {
      name: 'Eleven (Millie Bobby Brown)',
      description: 'Una niña con poderes psicoquinéticos que escapa del laboratorio de Hawkins Nacional y se une a un grupo de niños para encontrar a Will Byers.',
      img: '/1.webp',
      borderClass: 'blue-border'
    },
    {
      name: 'Will Byers (Noah Schnapp)',
      description: 'Un niño que desaparece en el Upside Down y lucha por sobrevivir mientras su madre y amigos buscan rescatarlo.',
      img: '/images.jpeg',
      borderClass: 'red-border'
    },
    {
      name: 'Mike Wheeler (Finn Wolfhard)',
      description: 'Un niño que lidera la búsqueda de su amigo Will y protege a Eleven de los peligros que la rodean.',
      img: '/Mike.webp',
      borderClass: 'red-border'
    },
    {
      name: 'Lucas Sinclair (Caleb McLaughlin)',
      description: 'Un niño valiente y sensato que se une a Mike y Dustin en la búsqueda de Will y ayuda a desentrañar el misterio del Upside Down.',
      img: '/Lucas.webp',
      borderClass: 'blue-border'
    },
    {
      name: 'Dustin Henderson (Gaten Matarazzo)',
      description: 'Un niño curioso y leal que ayuda a Mike en la búsqueda de Will y se convierte en un aliado clave para Eleven.',
      img: '/Dustin.webp',
      borderClass: 'blue-border'
    },
    {
      name: 'Joyce Byers (Winona Ryder)',
      description: 'La madre desesperada de Will que busca la verdad sobre su desaparición y enfrenta a las autoridades que intentan ocultarla.',
      img: '/Joyce.webp',
      borderClass: 'red-border'
    },
    {
      name: 'Jim Hopper (David Harbour)',
      description: 'El jefe de policía de Hawkins que investiga la desaparición de Will y descubre un oscuro secreto detrás del laboratorio de Hawkins Nacional.',
      img: '/Hopper.webp',
      borderClass: 'blue-border'
    }
  ];
}

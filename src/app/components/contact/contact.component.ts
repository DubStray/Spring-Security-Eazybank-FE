import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact.model';
import { NgForm } from '@angular/forms';
import { getCookie } from 'typescript-cookie';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

/**
 * Componente per il form di contatto.
 * Permette all'utente di inviare messaggi o richieste di supporto alla banca.
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  model = new Contact();
  contacts = new Array();

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {}

  /**
   * Invia il messaggio di contatto al backend.
   * Al successo, resetta il form.
   * 
   * @param contactForm Riferimento al form Angular (NgForm) per gestire reset e validazione.
   */
  saveMessage(contactForm: NgForm) {
    this.dashboardService.saveMessage(this.model).subscribe((responseData) => {
      this.contacts = <any>responseData.body;
      
      // Aggiorna il modello per mostrare/loggare il messaggio salvato (opzionale, a seconda della logica di UI desiderata).
      this.contacts.forEach(
        function (this: ContactComponent, contact: Contact) {
          this.model = contact;
        }.bind(this)
      );
      // Pulisce i campi del form dopo l'invio.
      contactForm.resetForm();
    });
  }
}

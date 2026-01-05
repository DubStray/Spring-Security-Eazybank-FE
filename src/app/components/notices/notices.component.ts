import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

/**
 * Componente per la visualizzazione degli avvisi (Notices).
 * Carica e mostra le comunicazioni pubbliche della banca.
 */
@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css'],
})
export class NoticesComponent implements OnInit {
  notices = new Array();

  constructor(private dashboardService: DashboardService) {}

  /**
   * Carica la lista degli avvisi dal backend all'inizializzazione.
   */
  ngOnInit(): void {
    this.dashboardService.getNoticeDetails().subscribe((responseData) => {
      // Popola l'array 'notices' con i dati ricevuti per mostrarli nel template.
      this.notices = <any>responseData.body;
    });
  }
}

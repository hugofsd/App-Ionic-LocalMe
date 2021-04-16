import { CepServiceService } from 'src/service/cep-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.page.html',
  styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage implements OnInit {

  private cep;
	private endereco:any = {};
	vazio = "";

  constructor(
    public viacep: CepServiceService
  ) { }

  ngOnInit() {
  }

  getEndereco(){
 
		this.viacep.callService(this.cep)
		.subscribe(
        data =>{
		this.endereco = data;
		console.log(data);
        }
      );
	}


}

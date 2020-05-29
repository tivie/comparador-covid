/*
 * Copyright (c) Estêvão Soares dos Santos 2020.
 * This file is part of Comparador-COVID.
 *  
 * Comparador-COVID is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *  
 * Comparador-COVID is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Comparador-COVID.  If not, see <http://www.gnu.org/licenses/>.
 */


class Caso {
  constructor(id, num_utente, nome, data_nascimento, status, origin)  {
    this.id = id;
    this.num_utente = num_utente;
    this.nome = nome;
    //this.nome_pseudonimizado = 
    this.data_nascimento = data_nascimento;
    this.status = status || null;
    this.origin = origin || 'trace';
  }
  
  static Compare(a, b) {
    if (!a instanceof Caso || !b instanceof Caso) {
      throw ('Error: a nd b must be instances of Caso');
    }
    
    if (a.num_utente === '' || a.num_utente === null || typeof a.num_utente === 'undefined') {
      let nome_a = '';
      if(origin === 'sinave_med') {
        // TODO: construir isto com base na formula dos nomes pseudonimizados no sinave med
        nome_a = a.nome;
      } else {
        nome_a = a.nome;
      }
      
    }
    
    
  }
  
}


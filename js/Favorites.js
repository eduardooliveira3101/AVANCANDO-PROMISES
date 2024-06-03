//Parte lógica de iniciar
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = [{
      login: 'eduardooliveira3101',
      name: 'Eduardo Oliveira',
      public_repos: '45454',
      followers: '121545'
    },
      {
      login: 'maykbrito',
      name: 'Mayk Brito',
      public_repos: '8787878',
      followers: '10000000000'
      }
    ]
  }
}

//Parte de eventos e visualização 
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector('table tbody')

    this.update()
  }

  update() {
    this.removeAllTr()

    this.entries.forEach(users => {
      const row = this.createRow()
      row.querySelector('.user img').src = `https://github.com/${users.login}.png` 
      row.querySelector('.user p').textContent = users.name 
      row.querySelector('.user span').textContent = users.login 
      row.querySelector('.repositories').textContent = users.public_repos 
      row.querySelector('.followers').textContent = users.followers


      this.tbody.append(row)
    } )
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `<td class="user">
    <img src="https://github.com/maykbrito.png" alt="Imagem de maykbrito">
    <a href="https://github.com/maykbrito" target="_blank">
      <p>Mayk Brito</p>
      <span>maykbrito</span>
    </a>
    </td>
    <td class="repositories">
      76
    </td>
    <td class="followers">
      9589
    </td>
    <td>
      <button class="remove">&times;</button>
    </td> `

    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => tr.remove())
  }
}
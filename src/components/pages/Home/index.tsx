import { Play } from 'phosphor-react'

export function Home() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task"></input>

          <label htmlFor="minutesAmount"></label>
          <input id="minutesAmount"></input>

          <span>minutos.</span>
        </div>

        <div>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </div>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </div>
  )
}

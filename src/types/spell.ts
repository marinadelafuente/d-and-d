export type Spell = {
  index: string
  name: string
  url: string
}

export type SpellDetailed = {
  index: string
  name: string
  desc: [string]
  higher_level: [string]
  range: string
  components: 'V' | 'S' | 'M'[]
  material: string
  area_of_effect: {
    size: number
    type: 'sphere' | 'cone' | 'cylinder' | 'line' | 'cube'
  }
  url: string
  ritual: boolean
  duration: string
  concentration: boolean
  casting_time: string
  level: number
  school: { index: string; name: string; url: string }
  classes: {
    index: string
    name: string
    url: string
  }[]
  subclasses: {
    index: string
    name: string
    url: string
  }[]
}

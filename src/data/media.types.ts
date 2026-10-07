export interface MediaSource {
  readonly w: number
  readonly src: string
}

export interface MediaAsset {
  readonly width: number
  readonly height: number
  readonly srcs: readonly MediaSource[]
  readonly lqip: string
}

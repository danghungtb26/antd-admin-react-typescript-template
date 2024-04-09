import { TagViewModel } from '@models/tag-view'
import { createContext, useContext } from 'react'

export type TagViewContextType = {
  tagViews: TagViewModel[]

  addTagView: (tagView: TagViewModel) => void

  removeTagView: (id: TagViewModel['id']) => void
}

export const TagViewContext = createContext<TagViewContextType>({
  tagViews: [TagViewModel.dashboard],
  addTagView: () => {},
  removeTagView: () => {},
})

export const useTagView = () => {
  return useContext(TagViewContext)
}

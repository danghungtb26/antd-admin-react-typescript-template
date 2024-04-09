import React, { useState } from 'react'
import { TagViewContext, TagViewContextType } from './context'
import { TagViewModel } from '@models/tag-view'
import { uniqBy } from 'lodash'

type TagViewProviderProps = {}

const TagViewProvider: React.FC<React.PropsWithChildren<TagViewProviderProps>> = ({ children }) => {
  const [tagViews, setTagViews] = useState<TagViewContextType['tagViews']>([TagViewModel.dashboard])

  const addTagView: TagViewContextType['addTagView'] = v => {
    setTagViews(s => uniqBy(s.concat(v), 'path'))
  }

  const removeTagView: TagViewContextType['removeTagView'] = id => {
    setTagViews(s => s.filter(i => i.id !== id))
  }

  const value: TagViewContextType = {
    tagViews,
    addTagView,
    removeTagView,
  }

  return <TagViewContext.Provider value={value}>{children}</TagViewContext.Provider>
}

export default TagViewProvider

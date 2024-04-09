import { useTagView } from '@contexts/tag-view/context'
import { TagViewModel } from '@models/tag-view'
import React, { useEffect } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import cx from 'classnames'
import { CloseCircleOutlined } from '@ant-design/icons'

export const TAG_VIEW_HEIGHT = 34

const Container = styled.div`
  height: ${TAG_VIEW_HEIGHT / 10}rem;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.12),
    0 0 3px 0 rgba(0, 0, 0, 0.04);

  > div {
    overflow: clip !important;
    > div {
      white-space: nowrap;
    }
  }
`

const TagViewItem = styled(Link)`
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 2.6rem;
  line-height: 2.6rem;
  border: 1px solid #d8dce5;
  color: #495060;
  background: #fff;
  padding: 0 0.8rem;
  font-size: 1.2rem;
  margin-left: 0.4rem;
  margin-top: 0.4rem;
  &:first-of-type {
    margin-left: 1.5rem;
  }
  &:last-of-type {
    margin-right: 1.5rem;
  }
  &.active {
    background-color: #42b983;
    color: #fff;
    border-color: #42b983;
    &::before {
      content: '';
      background: #fff;
      display: inline-block;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      position: relative;
      margin-right: 2px;
    }
  }
`

type TagViewProps = {}

const TagView: React.FC<React.PropsWithChildren<TagViewProps>> = () => {
  const { tagViews, addTagView, removeTagView } = useTagView()

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    addTagView(TagViewModel.fromJson({ title: location.pathname, path: location.pathname }))
  }, [location.pathname])

  const onClickRemove: (tag: TagViewModel) => React.MouseEventHandler<HTMLSpanElement> =
    tag => e => {
      e.preventDefault()
      if (tag.path === location.pathname) {
        const index = tagViews.findIndex(i => i.id === tag.id)
        if (index < 0) {
          return
        }

        const before = tagViews[index - 1]
        navigate(before.path ?? '')
      }
      removeTagView(tag.id)
    }

  return (
    <Container>
      <Scrollbars
        autoHide
        autoHideTimeout={500}
        autoHideDuration={200}
        hideTracksWhenNotNeeded={true}
      >
        {tagViews.map(tag => (
          <TagViewItem
            to={tag.path ?? ''}
            key={tag.id}
            className={cx({ active: tag.path === location.pathname })}
          >
            {tag.title}
            {tag.deletable ? (
              <CloseCircleOutlined
                onClick={onClickRemove(tag)}
                style={{ marginLeft: '1rem' }}
                size={10}
              />
            ) : null}
          </TagViewItem>
        ))}
      </Scrollbars>
      {/* <div style={{ position: 'relative', height: '100%', width: '100%' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          {tagViews.map(tag => (
            <TagViewItem key={tag.id}>{tag.title}</TagViewItem>
          ))}
        </div>
      </div> */}
    </Container>
  )
}

export default TagView

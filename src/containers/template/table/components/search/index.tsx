import { SearchOutlined } from '@ant-design/icons'
import { Button, Collapse, Form, Input, Select } from 'antd'
import React from 'react'
const { Panel } = Collapse

type TableSearchProps = {}

const TableSearch: React.FC<React.PropsWithChildren<TableSearchProps>> = () => {
  return (
    <Collapse defaultActiveKey={['1']}>
      <Panel header="Search" key="1">
        <Form layout="inline" name="table_name">
          <Form.Item name="search" label="Search:">
            <Input />
          </Form.Item>
          <Form.Item label="Status:" name="status">
            <Select style={{ width: 120 }}>
              <Select.Option value="published">published</Select.Option>
              <Select.Option value="draft">draft</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Star:" name="start">
            <Select style={{ width: 120 }}>
              <Select.Option value={1}>★</Select.Option>
              <Select.Option value={2}>★★</Select.Option>
              <Select.Option value={3}>★★★</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" icon={<SearchOutlined />}>
              Search
            </Button>
          </Form.Item>
        </Form>
      </Panel>
    </Collapse>
  )
}

export default TableSearch

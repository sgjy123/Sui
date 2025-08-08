import React, { useState } from 'react';
import { Table, Space, Button, Tag } from 'components';
import './style.less';

const TableDemo = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  // 基础数据
  const dataSource = [
    {
      key: '1',
      name: '张三',
      age: 32,
      address: '北京市朝阳区',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: '李四',
      age: 42,
      address: '上海市浦东新区',
      tags: ['manager'],
    },
    {
      key: '3',
      name: '王五',
      age: 28,
      address: '广州市天河区',
      tags: ['cool', 'teacher'],
    },
    {
      key: '4',
      name: '赵六',
      age: 35,
      address: '深圳市南山区',
      tags: ['designer'],
    },
  ];

  // 合并数据
  const mergeDataSource = [
    {
      key: '1',
      name: '张三',
      age: 32,
      address: '北京市朝阳区',
      department: '技术部',
      position: '前端工程师',
    },
    {
      key: '2',
      name: '李四',
      age: 42,
      address: '上海市浦东新区',
      department: '技术部',
      position: '后端工程师',
    },
    {
      key: '3',
      name: '王五',
      age: 28,
      address: '广州市天河区',
      department: '技术部',
      position: 'UI设计师',
    },
    {
      key: '4',
      name: '赵六',
      age: 35,
      address: '深圳市南山区',
      department: '产品部',
      position: '产品经理',
    },
    {
      key: '5',
      name: '钱七',
      age: 29,
      address: '杭州市西湖区',
      department: '产品部',
      position: '产品助理',
    },
  ];

  // 基础列配置
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  // 带排序的列配置
  const sortColumns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      sorter: true,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a - b,
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  // 带选择的配置
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys);
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      console.log('selectedRows: ', selectedRows);
    },
  };

  // 可展开的配置
  const expandable = {
    expandedRowRender: (record) => (
      <p style={{ margin: 0 }}>
        这是 {record.name} 的详细信息，年龄：{record.age}，地址：{record.address}
      </p>
    ),
    rowExpandable: (record) => record.name !== 'Not Expandable',
  };

  // 自定义渲染的列配置
  const customColumns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      render: (age) => (
        <span style={{ color: age > 30 ? '#ff4d4f' : '#52c41a' }}>
          {age}
        </span>
      ),
    },
    {
      title: '标签',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>编辑</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];

  // 固定列的配置
  const fixedColumns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      width: 100,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width: 100,
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
      width: 200,
    },
    {
      title: '标签',
      key: 'tags',
      dataIndex: 'tags',
      width: 200,
      render: (tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      fixed: 'right',
      width: 100,
      render: () => <a>操作</a>,
    },
  ];

  // 模拟加载
  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="sui-doc">
      <div className="sui-doc-header">
        <h1>Table 表格</h1>
        <p>展示行列数据，支持排序、筛选、分页、选择、展开等操作。</p>
      </div>

      <div className="sui-doc-content">
        {/* 基础用法 */}
        <section className="sui-doc-section">
          <h2>基础用法</h2>
          <p>最简单的用法，展示数据。</p>
          <div className="sui-doc-demo">
            <Table columns={columns} dataSource={dataSource} />
          </div>
        </section>

        {/* 带排序的表格 */}
        <section className="sui-doc-section">
          <h2>带排序的表格</h2>
          <p>使用 sorter 属性可以启用排序功能。</p>
          <div className="sui-doc-demo">
            <Table columns={sortColumns} dataSource={dataSource} />
          </div>
        </section>

        {/* 带选择的表格 */}
        <section className="sui-doc-section">
          <h2>带选择的表格</h2>
          <p>使用 rowSelection 属性可以启用行选择功能。</p>
          <div className="sui-doc-demo">
            <Table
              rowKey="key"
              rowSelection={rowSelection}
              columns={columns} 
              dataSource={dataSource} 
            />
          </div>
        </section>

        {/* 可展开的表格 */}
        <section className="sui-doc-section">
          <h2>可展开的表格</h2>
          <p>使用 expandable 属性可以启用行展开功能。</p>
          <div className="sui-doc-demo">
            <Table 
              expandable={expandable}
              columns={columns} 
              dataSource={dataSource} 
            />
          </div>
        </section>

        {/* 带分页的表格 */}
        <section className="sui-doc-section">
          <h2>带分页的表格</h2>
          <p>使用 pagination 属性可以启用分页功能。</p>
          <div className="sui-doc-demo">
            <Table 
              columns={columns} 
              dataSource={dataSource}
              pagination={{
                current: 1,
                pageSize: 2,
                total: dataSource.length,
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: (total, range) => `第 ${range[0]}-${range[1]} 条/共 ${total} 条`,
              }}
            />
          </div>
        </section>

        {/* 自定义渲染 */}
        <section className="sui-doc-section">
          <h2>自定义渲染</h2>
          <p>使用 render 属性可以自定义单元格内容。</p>
          <div className="sui-doc-demo">
            <Table columns={customColumns} dataSource={dataSource} />
          </div>
        </section>

        {/* 固定列 */}
        <section className="sui-doc-section">
          <h2>固定列</h2>
          <p>使用 fixed 属性可以固定列。</p>
          <div className="sui-doc-demo">
            <div style={{ width: '600px', overflow: 'auto' }}>
              <Table columns={fixedColumns} dataSource={dataSource} />
            </div>
          </div>
        </section>

        {/* 不同尺寸 */}
        <section className="sui-doc-section">
          <h2>不同尺寸</h2>
          <p>使用 size 属性可以设置表格大小。</p>
          <div className="sui-doc-demo">
            <div style={{ marginBottom: 16 }}>
              <h4>小尺寸</h4>
              <Table size="small" columns={columns} dataSource={dataSource} />
            </div>
            <div style={{ marginBottom: 16 }}>
              <h4>中等尺寸</h4>
              <Table size="middle" columns={columns} dataSource={dataSource} />
            </div>
            <div>
              <h4>大尺寸</h4>
              <Table size="large" columns={columns} dataSource={dataSource} />
            </div>
          </div>
        </section>

        {/* 加载状态 */}
        <section className="sui-doc-section">
          <h2>加载状态</h2>
          <p>使用 loading 属性可以显示加载状态。</p>
          <div className="sui-doc-demo">
            <div style={{ marginBottom: 16 }}>
              <Button onClick={handleLoading}>点击加载</Button>
            </div>
            <Table 
              loading={loading}
              columns={columns} 
              dataSource={dataSource} 
            />
          </div>
        </section>

        {/* 带边框的表格 */}
        <section className="sui-doc-section">
          <h2>带边框的表格</h2>
          <p>使用 bordered 属性可以显示边框。</p>
          <div className="sui-doc-demo">
            <Table 
              bordered
              columns={columns} 
              dataSource={dataSource} 
            />
          </div>
        </section>

        {/* 空数据状态 */}
        <section className="sui-doc-section">
          <h2>空数据状态</h2>
          <p>当表格没有数据时会显示空状态。</p>
          <div className="sui-doc-demo">
            <Table 
              columns={columns} 
              dataSource={[]} 
            />
          </div>
        </section>

        {/* 隔行变色 */}
        <section className="sui-doc-section">
          <h2>隔行变色</h2>
          <p>使用 striped 属性可以启用隔行变色，使用 stripeColor 属性可以自定义条纹颜色。</p>
          <div className="sui-doc-demo">
            <div style={{ marginBottom: 16 }}>
              <h4>默认隔行变色</h4>
              <Table 
                striped
                columns={columns} 
                dataSource={dataSource} 
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <h4>自定义颜色隔行变色</h4>
              <Table 
                striped
                stripeColor="#f0f8ff"
                columns={columns} 
                dataSource={dataSource} 
              />
            </div>
            <div>
              <h4>深色隔行变色</h4>
              <Table 
                striped
                stripeColor="#f5f5f5"
                columns={columns} 
                dataSource={dataSource} 
              />
            </div>
          </div>
        </section>

        {/* 列对齐方式 */}
        <section className="sui-doc-section">
          <h2>列对齐方式</h2>
          <p>使用 align 属性可以设置表格的默认对齐方式，也可以在列配置中使用 align 属性单独设置。</p>
          <div className="sui-doc-demo">
            <div style={{ marginBottom: 16 }}>
              <h4>左对齐（默认）</h4>
              <Table
                bordered
                align="left"
                columns={columns} 
                dataSource={dataSource} 
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <h4>居中对齐</h4>
              <Table 
                bordered
                align="center"
                columns={columns} 
                dataSource={dataSource} 
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <h4>右对齐</h4>
              <Table 
                bordered
                align="right"
                columns={columns} 
                dataSource={dataSource} 
              />
            </div>
            <div>
              <h4>混合对齐方式</h4>
              <Table 
                bordered
                columns={[
                  { title: '姓名', dataIndex: 'name', key: 'name', align: 'left' },
                  { title: '年龄', dataIndex: 'age', key: 'age', align: 'center' },
                  { title: '地址', dataIndex: 'address', key: 'address', align: 'right' },
                ]} 
                dataSource={dataSource} 
              />
            </div>
          </div>
        </section>
        
        {/* 行列合并 */}
        <section className="sui-doc-section">
          <h2>行列合并</h2>
          <p>使用 onCell 属性可以设置单元格的 rowSpan 和 colSpan，实现行列合并。</p>
          <div className="sui-doc-demo">
            <div style={{ marginBottom: 16 }}>
              <h4>行合并</h4>
              <Table 
                bordered
                columns={[
                  {
                    title: '部门',
                    dataIndex: 'department',
                    key: 'department',
                    onCell: (record, index) => {
                      // 同一部门的行进行合并
                      if (index === 0 || record.department !== mergeDataSource[index - 1].department) {
                        let rowSpan = 1;
                        // 计算当前部门有多少行
                        for (let i = index + 1; i < mergeDataSource.length; i++) {
                          if (mergeDataSource[i].department === record.department) {
                            rowSpan++;
                          } else {
                            break;
                          }
                        }
                        return { rowSpan };
                      }
                      // 被合并的行不显示
                      return { rowSpan: 0 };
                    },
                  },
                  {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                  },
                  {
                    title: '职位',
                    dataIndex: 'position',
                    key: 'position',
                  },
                ]} 
                dataSource={mergeDataSource} 
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <h4>列合并</h4>
              <Table 
                bordered
                columns={[
                  {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                  },
                  {
                    title: '基本信息',
                    key: 'info',
                    colSpan: 2,
                    dataIndex: 'age',
                    onCell: (_, index) => {
                      if (index === 0) {
                        return { colSpan: 2 };
                      }
                      return {};
                    },
                    render: (value, record) => `${value}岁，${record.address}`,
                  },
                  {
                    title: '地址',
                    dataIndex: 'address',
                    key: 'address',
                    onCell: (_, index) => {
                      if (index === 0) {
                        return { colSpan: 0 };
                      }
                      return {};
                    },
                  },
                ]} 
                dataSource={dataSource.slice(0, 2)} 
              />
            </div>
            <div>
              <h4>表头合并</h4>
              <Table 
                bordered
                columns={[
                  {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                    onHeaderCell: () => ({ rowSpan: 2 }),
                  },
                  {
                    title: '个人信息',
                    colSpan: 2,
                    onHeaderCell: () => ({ colSpan: 2 }),
                    dataIndex: 'age',
                    key: 'age',
                  },
                  {
                    title: '',
                    dataIndex: 'address',
                    key: 'address',
                    onHeaderCell: () => ({ colSpan: 0 }),
                  },
                  {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age2',
                  },
                  {
                    title: '地址',
                    dataIndex: 'address',
                    key: 'address2',
                  },
                ]} 
                dataSource={dataSource} 
              />
            </div>
          </div>
        </section>

        {/* API */}
        <section className="sui-doc-section">
          <h2>API</h2>
          <div className="sui-doc-api">
            <h3>Table</h3>
            <table>
              <thead>
                <tr>
                  <th>参数</th>
                  <th>说明</th>
                  <th>类型</th>
                  <th>默认值</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>columns</td>
                  <td>表格列的配置描述</td>
                  <td>ColumnType[]</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>dataSource</td>
                  <td>数据数组</td>
                  <td>object[]</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>rowKey</td>
                  <td>表格行 key 的取值</td>
                  <td>string | function</td>
                  <td>'id'</td>
                </tr>
                <tr>
                  <td>pagination</td>
                  <td>分页器配置</td>
                  <td>object | boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>loading</td>
                  <td>页面是否加载中</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>bordered</td>
                  <td>是否展示外边框和列边框</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>表格大小</td>
                  <td>{'small' | 'middle' | 'large'}</td>
                  <td>'middle'</td>
                </tr>
                <tr>
                  <td>rowSelection</td>
                  <td>表格行是否可选择</td>
                  <td>object</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>expandable</td>
                  <td>展开功能的配置</td>
                  <td>object</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>scroll</td>
                  <td>设置横向或纵向滚动，也可用于指定滚动区域的宽和高</td>
                  <td>object</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>分页、排序、筛选变化时触发</td>
                  <td>function</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>striped</td>
                  <td>是否启用隔行变色</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>stripeColor</td>
                  <td>隔行变色的背景颜色</td>
                  <td>string</td>
                  <td>'#fafafa'</td>
                </tr>
                <tr>
                  <td>align</td>
                  <td>表格的默认对齐方式</td>
                  <td>left | center | right</td>
                  <td>'left'</td>
                </tr>
              </tbody>
            </table>

            <h3>ColumnType</h3>
            <table>
              <thead>
                <tr>
                  <th>参数</th>
                  <th>说明</th>
                  <th>类型</th>
                  <th>默认值</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>title</td>
                  <td>列头显示文字</td>
                  <td>ReactNode</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>dataIndex</td>
                  <td>列数据在数据项中对应的 key</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>key</td>
                  <td>React 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>width</td>
                  <td>列宽度</td>
                  <td>string | number</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>align</td>
                  <td>设置列内容的对齐方式</td>
                  <td>left | right | center</td>
                  <td>'left'</td>
                </tr>
                <tr>
                  <td>fixed</td>
                  <td>列固定方向</td>
                  <td>left | right</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>sorter</td>
                  <td>排序函数，本地排序使用一个函数，需要服务端排序可设为 true</td>
                  <td>function or boolean</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>render</td>
                  <td>生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引</td>
                  <td>function</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>onCell</td>
                  <td>设置单元格属性，用于行列合并等</td>
                  <td>function(record, index)</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>onHeaderCell</td>
                  <td>设置表头单元格属性，用于表头行列合并等</td>
                  <td>function(columnIndex)</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TableDemo; 
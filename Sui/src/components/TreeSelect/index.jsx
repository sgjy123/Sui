
// 选择框内容渲染
const renderSelection = () => {
    if (multiple || treeCheckable) {
        const displayTags = getDisplayTags();

        return (
            <div className="sui-tree-select-tags" style={{ display: 'flex', overflowX: 'auto' }}>
                {displayTags.length > 0 ?
                    displayTags.map(tag =>
                        tag.key === '__sui_ellipsis__' ? (
                            <span className="sui-tree-select-tag-rest" key={tag.key}>
                                {tag.label}
                            </span>
                        ) : (
                            <span className="sui-tree-select-tag" key={tag.key} style={{ marginRight: '8px' }}>
                                <span className="sui-tree-select-tag-content">{tag.label}</span>
                                <span 
                                    className="sui-tree-select-tag-close" 
                                    onClick={e => { 
                                        e.stopPropagation(); 
                                        handleRemoveTag(tag.key); 
                                    }}
                                >
                                    ×
                                </span>
                            </span>
                        )
                    )
                    : null
                }
                {showSearch && (
                    <input
                        className="sui-tree-select-search-input"
                        value={searchValue}
                        onChange={handleSearchChange}
                        placeholder={displayTags.length === 0 ? placeholder : ''}
                        style={{ flex: 1, minWidth: 0 }}
                        readOnly={!open}
                        autoFocus={open}
                    />
                )}
            </div>
        );
    }

    // 单选
    return (
        <div className="sui-tree-select-selection-item">
            {selectedLabels.length > 0 ? selectedLabels[0].label : ''}
            {showSearch && open && (
                <input
                    className="sui-tree-select-search-input"
                    value={searchValue}
                    onChange={handleSearchChange}
                    placeholder={selectedLabels.length === 0 ? placeholder : ''}
                    style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '100%',
                        padding: 'inherit',
                        border: 'none',
                        background: 'transparent',
                        outline: 'none',
                    }}
                    autoFocus
                />
            )}
        </div>
    );
};

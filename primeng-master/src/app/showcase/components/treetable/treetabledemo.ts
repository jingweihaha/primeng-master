import { TreeNode } from './../../../../../../../ng-treetable-master/ng-treetable-master/src/lib/src/component/model';
// tslint:disable-next-line:max-line-length
import { Component, OnInit, OnDestroy, AfterViewInit, OnChanges, Input, Output, ContentChild, EventEmitter, ContentChildren, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import {NodeService} from '../../service/nodeservice';
import {Message, MenuItem} from '../../../components/common/api';


@Component({
    templateUrl: './treetabledemo.html',
    // tslint:disable-next-line:component-selector
    selector: 'ay-treetable',
})
// tslint:disable-next-line:component-class-suffix
export class TreeTableDemo implements OnInit{

    msgs: Message[];

    files1: TreeNode[];

    files2: TreeNode[];

    files3: TreeNode[];

    files4: TreeNode[];

    files5: TreeNode[];

    files6: TreeNode[];

    lazyFiles: TreeNode[];

    selectedFile: TreeNode;

    selectedFile2: TreeNode;

    selectedFiles: TreeNode[];

    selectedFiles2: TreeNode[];

    items: MenuItem[];


// @Input() paginator: boolean;

// @Input() rows: number;

// @Input() totalRecords: number;

// @Input() pageLinks: number = 5;

// @Input() rowsPerPageOptions: number[];

// @Input() first: number = 0;

// @Input() lazy: boolean;

// @Input() virtualScroll: boolean;

// @Input() value: TreeNode[];

// @Input() selectionMode: string;

// @Input() selection: any;

// @Input() style: any;

// @Input() styleClass: string;

// @Input() labelExpand: string = 'Expand';

// @Input() labelCollapse: string = 'Collapse';

// @Input() metaKeySelection: boolean = true;

// @Input() contextMenu: any;

// @Input() globalFilter: any;

// @Input() filterDelay: number = 300;

// @Input() immutable: boolean;

// @Input() rowStyleClass: Function;

// @Input() tableStyle: any;

// @Input() tableStyleClass: string;

// @Output() selectionChange: EventEmitter<any> = new EventEmitter();

// @Output() onNodeSelect: EventEmitter<any> = new EventEmitter();

// @Output() onNodeUnselect: EventEmitter<any> = new EventEmitter();

// @Output() onNodeExpand: EventEmitter<any> = new EventEmitter();

// @Output() onNodeCollapse: EventEmitter<any> = new EventEmitter();

// @Output() onContextMenuSelect: EventEmitter<any> = new EventEmitter();

// @Output() onLazyLoad: EventEmitter<any> = new EventEmitter();

// @ContentChild(Header) header: Header;

// @ContentChild(Footer) footer: Footer;

// @ContentChildren(Column) columns: QueryList<Column>;

// public rowTouched: boolean;
// public loading: boolean;
// public stopFilterPropagation: boolean;
// public dataToRender: any[];
// public filterTimeout: any;
// public filteredValue: any[];
// globalFilterFunction: any;

// filterConstraints = {

//     startsWith(value, filter): boolean {
//         if (filter === undefined || filter === null || filter.trim() === '') {
//             return true;
//         }

//         if (value === undefined || value === null) {
//             return false;
//         }

//         let filterValue = filter.toString().toLowerCase();
//         return value.toString().toLowerCase().slice(0, filterValue.length) === filterValue;
//     },

    // contains(value, filter): boolean {
    //     if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
    //         return true;
    //     }

    //     if (value === undefined || value === null) {
    //         return false;
    //     }

    //     return value.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    // },

    // endsWith(value, filter): boolean {
    //     if (filter === undefined || filter === null || filter.trim() === '') {
    //         return true;
    //     }

    //     if (value === undefined || value === null) {
    //         return false;
    //     }

    //     let filterValue = filter.toString().toLowerCase();
    //     return value.toString().toLowerCase().indexOf(filterValue, value.toString().length - filterValue.length) !== -1;
    // },

    // equals(value, filter): boolean {
    //     if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
    //         return true;
    //     }

    //     if (value === undefined || value === null) {
    //         return false;
    //     }

    //     return value.toString().toLowerCase() == filter.toString().toLowerCase();
    // },

    // in(value, filter: any[]): boolean {
    //     if (filter === undefined || filter === null || filter.length === 0) {
    //         return true;
    //     }

    //     if (value === undefined || value === null) {
    //         return false;
    //     }

    //     for (let i = 0; i < filter.length; i++) {
    //         // tslint:disable-next-line:curly
    //         if (filter[i] === value)
    //             return true;
    //     }

    //     return false;
    // }
// };

    constructor(private nodeService: NodeService) { }
    // constructor(public renderer: Renderer2) { }

    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files1 = files);
        this.nodeService.getFilesystem().then(files => this.files2 = files);
        this.nodeService.getFilesystem().then(files => this.files3 = files);
        this.nodeService.getFilesystem().then(files => this.files4 = files);
        this.nodeService.getFilesystem().then(files => this.files5 = files);
        this.nodeService.getFilesystem().then(files => this.files6 = files);
        this.nodeService.getLazyFilesystem().then(files => this.lazyFiles = files);

        this.items = [
            {label: 'DIVISION', icon: 'fa-search', command: (event) => this.division(this.selectedFile2)},
            {label: 'SUB DIVISION', icon: 'fa-search', command: (event) => this.subdivision(this.selectedFile2)},
            {label: 'VERSION', icon: 'fa-search', command: (event) => this.version(this.selectedFile2)},
            {label: 'ITEM', icon: 'fa-search', command: (event) => this.viewNode(this.selectedFile2)},
            {label: 'Delete', icon: 'fa-close', command: (event) => this.deleteNode(this.selectedFile2)}
        ];

        // if (this.immutable) this.handleDataChange();
    }

    nodeSelect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.data.name});
    }

    nodeUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.data.name});
    }

    nodeExpand(event) {
        if (event.node) {
            // in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
            this.nodeService.getLazyFilesystem().then(nodes => event.node.children = nodes);
        }
    }


    // below is the five click message box.
    viewNode(node: TreeNode) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Selected', detail: node.data.name});
    }

    deleteNode(node: TreeNode) {
        node.parent.children = node.parent.children.filter( n => n.data !== node.data);
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Deleted', detail: node.data.name});
    }

    division(node: TreeNode) {
        node.parent.children = node.parent.children.filter( n => n.data !== node.data);
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Deleted', detail: node.data.name});
    }

    subdivision(node: TreeNode) {
        node.parent.children = node.parent.children.filter( n => n.data !== node.data);
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Deleted', detail: node.data.name});
    }

    version(node: TreeNode) {
        node.parent.children = node.parent.children.filter( n => n.data !== node.data);
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Deleted', detail: node.data.name});
    }

// onRowClick(event: MouseEvent, node: TreeNode) {
//     let eventTarget = (<Element> event.target);
//     if (eventTarget.className && eventTarget.className.indexOf('ui-treetable-toggler') === 0) {
//         return;
//     }
//     else if (this.selectionMode) {
//         if (node.selectable === false) {
//             return;
//         }

//         let metaSelection = this.rowTouched ? false : this.metaKeySelection;
//         let index = this.findIndexInSelection(node);
//         let selected = (index >= 0);

//         if (this.isCheckboxSelectionMode()) {
//             if (selected) {
//                 this.propagateSelectionDown(node, false);
//                 if (node.parent) {
//                     this.propagateSelectionUp(node.parent, false);
//                 }
//                 this.selectionChange.emit(this.selection);
//                 this.onNodeUnselect.emit({originalEvent: event, node: node});
//             }
//             else {
//                 this.propagateSelectionDown(node, true);
//                 if (node.parent) {
//                     this.propagateSelectionUp(node.parent, true);
//                 }
//                 this.selectionChange.emit(this.selection);
//                 this.onNodeSelect.emit({originalEvent: event, node: node});
//             }
//         }
//         else {
//             if (metaSelection) {
//                 let metaKey = (event.metaKey || event.ctrlKey);

//                 if (selected && metaKey) {
//                     if (this.isSingleSelectionMode()) {
//                         this.selectionChange.emit(null);
//                     }
//                     else {
//                         this.selection.splice(index, 1);
//                         this.selectionChange.emit(this.selection);
//                     }

//                     this.onNodeUnselect.emit({originalEvent: event, node: node});
//                 }
//                 else {
//                     if (this.isSingleSelectionMode()) {
//                         this.selectionChange.emit(node);
//                     }
//                     else if (this.isMultipleSelectionMode()) {
//                         this.selection = (!metaKey) ? [] : this.selection || [];
//                         this.selection.push(node);
//                         this.selectionChange.emit(this.selection);
//                     }

//                     this.onNodeSelect.emit({originalEvent: event, node: node});
//                 }
//             }
//             else {
//                 if (this.isSingleSelectionMode()) {
//                     if (selected) {
//                         this.selection = null;
//                         this.onNodeUnselect.emit({originalEvent: event, node: node});
//                     }
//                     else {
//                         this.selection = node;
//                         this.onNodeSelect.emit({originalEvent: event, node: node});
//                     }
//                 }
//                 else {
//                     if (selected) {
//                         this.selection.splice(index, 1);
//                         this.onNodeUnselect.emit({originalEvent: event, node: node});
//                     }
//                     else {
//                         this.selection = this.selection || [];
//                         this.selection.push(node);
//                         this.onNodeSelect.emit({originalEvent: event, node: node});
//                     }
//                 }

//                 this.selectionChange.emit(this.selection);
//             }
//         }
//     }

//     this.rowTouched = false;
// }

// onRowTouchEnd() {
//     this.rowTouched = true;
// }

// onRowRightClick(event: MouseEvent, node: TreeNode) {
//     if (this.contextMenu) {
//         let index = this.findIndexInSelection(node);
//         let selected = (index >= 0);

//         if (!selected) {
//             if (this.isSingleSelectionMode()) {
//                 this.selection = node;
//             }
//             else if (this.isMultipleSelectionMode()) {
//                 this.selection = [];
//                 this.selection.push(node);
//                 this.selectionChange.emit(this.selection);
//             }

//             this.selectionChange.emit(this.selection);
//         }

//         this.contextMenu.show(event);
//         this.onContextMenuSelect.emit({originalEvent: event, node: node});
//     }
// }

// findIndexInSelection(node: TreeNode) {
//     let index: number = -1;

//     if (this.selectionMode && this.selection) {
//         if (this.isSingleSelectionMode()) {
//             index = (this.selection == node) ? 0 : -1;
//         }
//         else {
//             for (let i = 0; i < this.selection.length; i++) {
//                 if (this.selection[i] == node) {
//                     index = i;
//                     break;
//                 }
//             }
//         }
//     }

//     return index;
// }

// propagateSelectionUp(node: TreeNode, select: boolean) {
//     if (node.children && node.children.length) {
//         let selectedCount: number = 0;
//         let childPartialSelected: boolean = false;
//         for (let child of node.children) {
//             if (this.isSelected(child)) {
//                 selectedCount++;
//             }
//             else if (child.partialSelected) {
//                 childPartialSelected = true;
//             }
//         }

//         if (select && selectedCount == node.children.length) {
//             this.selection = this.selection || [];
//             this.selection.push(node);
//             node.partialSelected = false;
//         }
//         else {
//             if (!select) {
//                 let index = this.findIndexInSelection(node);
//                 if (index >= 0) {
//                     this.selection.splice(index, 1);
//                 }
//             }

//             if (childPartialSelected || selectedCount > 0 && selectedCount != node.children.length)
//                 node.partialSelected = true;
//             else
//                 node.partialSelected = false;
//         }
//     }

//     let parent = node.parent;
//     if (parent) {
//         this.propagateSelectionUp(parent, select);
//     }
// }

// propagateSelectionDown(node: TreeNode, select: boolean) {
//     let index = this.findIndexInSelection(node);

//     if (select && index == -1) {
//         this.selection = this.selection || [];
//         this.selection.push(node);
//     }
//     else if (!select && index > -1) {
//         this.selection.splice(index, 1);
//     }

//     node.partialSelected = false;

//     if (node.children && node.children.length) {
//         for (let child of node.children) {
//             this.propagateSelectionDown(child, select);
//         }
//     }
// }

// isSelected(node: TreeNode) {
//     return this.findIndexInSelection(node) != -1;
// }

// isSingleSelectionMode() {
//     return this.selectionMode && this.selectionMode == 'single';
// }

// isMultipleSelectionMode() {
//     return this.selectionMode && this.selectionMode == 'multiple';
// }

// isCheckboxSelectionMode() {
//     return this.selectionMode && this.selectionMode == 'checkbox';
// }

// getRowStyleClass(rowData: any) {
//     let styleClass = '';
//     if (this.rowStyleClass) {
//         let rowClass = this.rowStyleClass.call(this, rowData);
//         if (rowClass) {
//             styleClass += ' ' + rowClass;
//         }
//     }
//     return styleClass;
// }

// hasFooter() {
//     if (this.columns) {
//         let columnsArr = this.columns.toArray();
//         for (let i = 0; i < columnsArr.length; i++) {
//             if (columnsArr[i].footer) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// ngOnInit() {
//     if (this.immutable) this.handleDataChange();
// }

// ngAfterViewInit() {
//     if (this.globalFilter && this.value) {
//         this.globalFilterFunction = this.renderer.listen(this.globalFilter, 'keyup', () => {
//             this.filterTimeout = setTimeout(() => {
//                 this.filter();
//                 this.filterTimeout = null;
//             }, this.filterDelay);
//         });
//     }
// }

// ngOnChanges(changes: SimpleChanges) {
//     if (changes['value'] && this.value && !this.immutable) {
//         this.handleDataChange();
//     }
// }

// shownColumns() {
//     return this.columns.filter(col => !col.hidden)
// }

// handleDataChange() {
//     if (this.paginator) {
//         this.updatePaginator();
//     }
//     this.updateDataToRender(this.filteredValue || this.value);
// }

// updatePaginator() {
//     this.totalRecords = this.lazy ? this.totalRecords : (this.value ? this.value.length : 0);
//     if (this.totalRecords && this.first >= this.totalRecords) {
//         let numberOfPages = Math.ceil(this.totalRecords / this.rows);
//         this.first = Math.max((numberOfPages - 1) * this.rows, 0);
//     }
// }

// paginate(event) {
//     this.first = event.first;
//     this.rows = event.rows;

//     if (this.lazy) {
//         this.stopFilterPropagation = true;
//     }
//     else {
//         this.updateDataToRender(this.filteredValue || this.value);
//     }

// }

// updateDataToRender(datasource) {
//     if ((this.paginator || this.virtualScroll) && datasource) {
//         this.dataToRender = [];
//         let startIndex: number = this.lazy ? 0 : this.first;
//         let endIndex: number = this.virtualScroll ? this.first + this.rows * 2 : startIndex + this.rows;

//         for (let i = startIndex; i < endIndex; i++) {
//             if (i >= datasource.length) {
//                 break;
//             }

//             this.dataToRender.push(datasource[i]);
//         }
//     }
//     else {
//         this.dataToRender = datasource;
//     }

//     this.loading = false;
// }

// filterFields(object) {
//     let res = false;
//     this.columns.toArray().map(col => {
//         if (!res && object[col.field]) {
//             res = object[col.field].toString().toLowerCase().includes(this.globalFilter.value.toString().toLowerCase())
//         }
//     });
//     return res;
// }

// filterChildren(children, parent) {
//     let res = false;
//     if (children) {
//         children.map(child => {
//             let _fields = this.filterFields(child.data);
//             let _children = this.filterChildren(child.children, child);
//             res = _fields || _children || res;
//         });
//         parent.expanded = res;
//     }
//     return res;
// }

// isFiltered(node) {
//     if (this.globalFilter) {
//         return this.filterFields(node.data) || this.filterChildren(node.children, node)
//     } else {
//         return true;
//     }
// }

// filter() {
//     this.first = 0;

//     this.filteredValue = this.value.filter(val => {
//         return this.filterFields(val.data) || this.filterChildren(val.children, val);
//     });

//     if (this.paginator) {
//         this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
//     }

//     this.updateDataToRender(this.filteredValue || this.value);
// }



// resolveFieldData(data: any, field: string): any {
//     if (data && field) {
//         if (field.indexOf('.') == -1) {
//             return data[field];
//         }
//         else {
//             let fields: string[] = field.split('.');
//             let value = data;
//             for (let i = 0, len = fields.length; i < len; ++i) {
//                 if (value == null) {
//                     return null;
//                 }
//                 value = value[fields[i]];
//             }
//             return value;
//         }
//     }
//     else {
//         return null;
//     }
// }

// ngOnDestroy() {
//     //remove event listener
//     if (this.globalFilterFunction) {
//         this.globalFilterFunction();
//     }
// }

}

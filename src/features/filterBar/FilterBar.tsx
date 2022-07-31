import { FunctionComponent } from "react"

export function FilterBar() {
    return (
        <div className="flex justify-evenly my-2"
            v-show="sortedDisplayItems.length">
            <button
            // :className="sorter?.sorterType === 'period' ? ['px-1', 'rounded-2xl', 'bg-gray-300'] : []"
            // @click="changingSorter('period')"
            >
                期限
            </button>
            <button
            // :className="sorter?.sorterType === 'value' ? ['px-1', 'rounded-2xl', 'bg-gray-300'] : []"
            // @click="changingSorter('value')"
            >
                数量</button>
            <button
            // :className="sorter?.sorterType === 'addDate' ? ['px-1', 'rounded-2xl', 'bg-gray-300'] : []"
            // @click="changingSorter('addDate')"
            >作成日</button>
            <button
            // @click="showingDeleteConfirm"
            >全削除
            </button>
        </div>
    )
}
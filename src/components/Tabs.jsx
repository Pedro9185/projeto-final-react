import './Tabs.css';
import { useState } from "react";
import Items from './Items';
import Propostas from './propostas';

export default function Tabs() {
    const [activeTab, setActiveTab] = useState('meus-itens');
   
    return (
        <>
        <div className="tabs-container">
            <div className="tabs-buttons">
            <button
                className={activeTab === 'meus-itens' ? 'active' : ''}
                onClick={() => setActiveTab('meus-itens')} 
                >
                  Meus Itens               
                </button>
            <button
                className={activeTab=== 'propostas' ? 'active' : ''}
                onClick={() => setActiveTab('propostas')}
                >
                Propostas               
                </button>
            </div>
                <div className="tab-contents">
                    {activeTab === 'meus-itens' && <Items/>}
                    {activeTab === 'propostas' && <Propostas/>}
                </div>
        </div>
        </>
    );
}
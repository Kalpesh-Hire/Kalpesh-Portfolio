import React from "react";
import { 
  FiBox, 
  FiDatabase, 
  FiUsers, 
  FiUserCheck, 
  FiLayers, 
  FiActivity, 
  FiBarChart2, 
  FiCheckCircle 
} from "react-icons/fi";

/**
 * AnimatedProjectPreview
 * Custom, original SVG/CSS interface illustrations representing real project architectures:
 * - MERP: Manufacturing workflows, Bill of Materials (BOM), production progress bars
 * - WMS: Warehouse storage racks, inventory stock levels, barcode scan indicators
 * - CRM: Sales deal pipeline stages, client lead cards, quotation conversion metrics
 * - HRMS: Employee workforce directories, attendance status pills, payroll calculation bars
 * - Fallback / Others: Modular full-stack dashboard topology
 */
function AnimatedProjectPreview({ type }) {
  switch (type) {
    case "merp":
      return (
        <div className="w-full h-36 rounded-2xl bg-[#070a10] border border-cyan-500/20 p-3 flex flex-col justify-between overflow-hidden relative group">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-cyan-500/10 text-cyan-400">
                <FiLayers className="text-xs" />
              </span>
              <span className="text-[11px] font-mono text-white font-bold">MERP · Production Line</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
              BOM Sync Active
            </span>
          </div>

          <div className="space-y-1.5 py-1">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Assembly Line A (Finished Goods)</span>
              <span className="text-cyan-300">92% Complete</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full w-[92%] animate-pulse" />
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-[9px] text-center">
              <div className="bg-white/5 p-1 rounded border border-white/5 text-slate-300">
                <span className="text-slate-500 block">RAW STOCK</span> 1,420 units
              </div>
              <div className="bg-white/5 p-1 rounded border border-white/5 text-slate-300">
                <span className="text-slate-500 block">WORK IN PROG</span> 380 units
              </div>
              <div className="bg-white/5 p-1 rounded border border-white/5 text-emerald-400">
                <span className="text-slate-500 block">DISPATCHED</span> 2,150 units
              </div>
            </div>
          </div>
        </div>
      );

    case "wms":
      return (
        <div className="w-full h-36 rounded-2xl bg-[#070a10] border border-blue-500/20 p-3 flex flex-col justify-between overflow-hidden relative group">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-blue-500/10 text-blue-400">
                <FiBox className="text-xs" />
              </span>
              <span className="text-[11px] font-mono text-white font-bold">WMS · Inventory Hub</span>
            </div>
            <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">
              Zone 04 · Bay B
            </span>
          </div>

          <div className="grid grid-cols-4 gap-1.5 py-1">
            {[
              { id: "R-101", count: "98%", full: true },
              { id: "R-102", count: "74%", full: true },
              { id: "R-103", count: "100%", full: true },
              { id: "R-104", count: "42%", full: false },
            ].map((rack) => (
              <div key={rack.id} className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-center font-mono">
                <div className="text-[9px] text-slate-400">{rack.id}</div>
                <div className={`text-[10px] font-bold ${rack.full ? "text-blue-300" : "text-amber-400"}`}>
                  {rack.count}
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
                  <div 
                    className="h-full bg-blue-400 rounded-full" 
                    style={{ width: rack.count }} 
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
            <span>Barcode Scan: Auto-Verified</span>
            <span className="text-emerald-400">Stock Transfer ➜ Done</span>
          </div>
        </div>
      );

    case "crm":
      return (
        <div className="w-full h-36 rounded-2xl bg-[#070a10] border border-emerald-500/20 p-3 flex flex-col justify-between overflow-hidden relative group">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-emerald-500/10 text-emerald-400">
                <FiUsers className="text-xs" />
              </span>
              <span className="text-[11px] font-mono text-white font-bold">CRM · Sales Conversion Funnel</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
              Active Pipeline
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 py-1">
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 font-mono text-[9px]">
              <div className="text-slate-500 uppercase">New Leads</div>
              <div className="text-xs font-bold text-white mt-0.5">24 Leads</div>
              <div className="text-cyan-400 mt-1">₹4.8L Value</div>
            </div>
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 font-mono text-[9px]">
              <div className="text-slate-500 uppercase">Quotation</div>
              <div className="text-xs font-bold text-white mt-0.5">12 Proposals</div>
              <div className="text-indigo-400 mt-1">₹18.2L Value</div>
            </div>
            <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 font-mono text-[9px]">
              <div className="text-emerald-400 uppercase">Closed Won</div>
              <div className="text-xs font-bold text-emerald-300 mt-0.5">8 Deals</div>
              <div className="text-emerald-400 mt-1">₹32.5L Value</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
            <span>Win Rate: 68.4%</span>
            <span className="text-emerald-400">Follow-up: Scheduled</span>
          </div>
        </div>
      );

    case "hrms":
      return (
        <div className="w-full h-36 rounded-2xl bg-[#070a10] border border-purple-500/20 p-3 flex flex-col justify-between overflow-hidden relative group">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-purple-500/10 text-purple-400">
                <FiUserCheck className="text-xs" />
              </span>
              <span className="text-[11px] font-mono text-white font-bold">HRMS · Workforce Dashboard</span>
            </div>
            <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-1.5 py-0.5 rounded">
              Payroll Cycle Live
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 py-1 font-mono text-[9px] text-center">
            <div className="bg-white/5 p-1.5 rounded-lg border border-white/5">
              <span className="text-slate-500 block">TOTAL STAFF</span>
              <span className="text-xs font-bold text-white">148 Active</span>
            </div>
            <div className="bg-emerald-500/10 p-1.5 rounded-lg border border-emerald-500/20 text-emerald-400">
              <span className="text-slate-500 block">PRESENT TODAY</span>
              <span className="text-xs font-bold">142 (96%)</span>
            </div>
            <div className="bg-white/5 p-1.5 rounded-lg border border-white/5 text-purple-300">
              <span className="text-slate-500 block">LEAVE REQUESTS</span>
              <span className="text-xs font-bold">6 Approved</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
            <span>Direct Deposit Status: Configured</span>
            <span className="text-purple-400">Auto Slip Generator ➜ Ready</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default AnimatedProjectPreview;

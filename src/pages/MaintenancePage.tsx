import React, { useMemo, useState } from 'react';
import {
  AlertCircle,
  CalendarClock,
  Check,
  CheckCircle2,
  Clock,
  Edit3,
  Plus,
  Trash2,
  X,
} from 'lucide-react';
import {
  computeMaintenanceStatus,
  getTodayDateString,
  useApp,
} from '../context/AppContext';
import { ApplianceId, MaintenanceStatus, MaintenanceTask } from '../types';

const PRESET_TASKS: { applianceId: ApplianceId; label: string }[] = [
  { applianceId: 'air-fryer', label: 'Clean air fryer basket' },
  { applianceId: 'microwave-oven', label: 'Clean microwave interior' },
  { applianceId: 'refrigerator', label: 'Check refrigerator door seals' },
  { applianceId: 'washing-machine', label: 'Clean washing machine filter' },
  { applianceId: 'dishwasher', label: 'Clean dishwasher filter' },
];

export const MaintenancePage: React.FC = () => {
  const {
    appliances,
    maintenanceTasks,
    addMaintenanceTask,
    updateMaintenanceTask,
    toggleMaintenanceTask,
    deleteMaintenanceTask,
    t,
  } = useApp();

  const [applianceId, setApplianceId] = useState<ApplianceId>('air-fryer');
  const [taskTitle, setTaskTitle] = useState('');
  const [dueDate, setDueDate] = useState(getTodayDateString());
  const [notes, setNotes] = useState('');
  const [formError, setFormError] = useState('');
  const [filterStatus, setFilterStatus] = useState<'All' | MaintenanceStatus>(
    'All'
  );

  // Inline edit state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDate, setEditDate] = useState('');
  const [editNotes, setEditNotes] = useState('');

  const counts = useMemo(() => {
    let dueToday = 0;
    let upcoming = 0;
    let completed = 0;
    maintenanceTasks.forEach((task) => {
      const status = computeMaintenanceStatus(task);
      if (status === 'Due Today') dueToday += 1;
      else if (status === 'Upcoming') upcoming += 1;
      else completed += 1;
    });
    return {
      total: maintenanceTasks.length,
      dueToday,
      upcoming,
      completed,
    };
  }, [maintenanceTasks]);

  const filteredTasks = useMemo(() => {
    return maintenanceTasks.filter((task) => {
      if (filterStatus === 'All') return true;
      return computeMaintenanceStatus(task) === filterStatus;
    });
  }, [maintenanceTasks, filterStatus]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskTitle.trim()) {
      setFormError('Please enter a maintenance task description.');
      return;
    }
    if (!dueDate) {
      setFormError('Please pick a due date.');
      return;
    }
    setFormError('');
    addMaintenanceTask({
      applianceId,
      taskTitle,
      dueDate,
      notes,
    });
    setTaskTitle('');
    setNotes('');
  };

  const startEditing = (task: MaintenanceTask) => {
    setEditingId(task.id);
    setEditTitle(task.taskTitle);
    setEditDate(task.dueDate);
    setEditNotes(task.notes || '');
  };

  const saveEdit = (task: MaintenanceTask) => {
    if (!editTitle.trim() || !editDate) return;
    updateMaintenanceTask({
      ...task,
      taskTitle: editTitle.trim(),
      dueDate: editDate,
      notes: editNotes.trim() || undefined,
    });
    setEditingId(null);
  };

  const renderStatus = (status: MaintenanceStatus) => {
    if (status === 'Completed') {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
          <CheckCircle2 className="w-4 h-4" />
          <span>Completed</span>
        </span>
      );
    }
    if (status === 'Due Today') {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800">
          <AlertCircle className="w-4 h-4" />
          <span>Due Today</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800">
        <Clock className="w-4 h-4" />
        <span>Upcoming</span>
      </span>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="space-y-2 max-w-2xl">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
          {t.pages.maintenanceTitle}
        </h1>
        <p className="text-base text-[#475569]">{t.pages.maintenanceSub}</p>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border border-[#E5E0D8] p-5">
          <p className="text-xs font-medium text-[#64748B]">Total Tasks</p>
          <p className="font-mono-nums text-2xl font-bold text-[#0F172A] mt-1">
            {counts.total}
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-amber-200 p-5">
          <p className="text-xs font-medium text-amber-800">Due Today</p>
          <p className="font-mono-nums text-2xl font-bold text-amber-800 mt-1">
            {counts.dueToday}
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-[#E5E0D8] p-5">
          <p className="text-xs font-medium text-teal-800">Upcoming</p>
          <p className="font-mono-nums text-2xl font-bold text-teal-800 mt-1">
            {counts.upcoming}
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-emerald-200 p-5">
          <p className="text-xs font-medium text-emerald-700">Completed</p>
          <p className="font-mono-nums text-2xl font-bold text-emerald-700 mt-1">
            {counts.completed}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left: Add Reminder Form */}
        <form
          onSubmit={handleAdd}
          className="lg:col-span-5 bg-white rounded-2xl border border-[#E5E0D8] p-6 space-y-5"
        >
          <div className="flex items-center gap-2.5">
            <CalendarClock className="w-5 h-5 text-teal-700" />
            <h2 className="font-display text-lg font-bold text-[#0F172A]">
              Schedule New Maintenance Task
            </h2>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="maint-appliance"
              className="block text-xs font-semibold text-[#334155]"
            >
              Select Appliance
            </label>
            <select
              id="maint-appliance"
              value={applianceId}
              onChange={(e) => setApplianceId(e.target.value as ApplianceId)}
              className="w-full h-11 px-3.5 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-sm text-[#0F172A] focus:outline-none focus:border-teal-700"
            >
              {appliances.map((app) => (
                <option key={app.id} value={app.id}>
                  {app.name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="maint-task"
              className="block text-xs font-semibold text-[#334155]"
            >
              Maintenance Task
            </label>
            <input
              id="maint-task"
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="e.g., Clean washing machine filter"
              className="w-full h-11 px-3.5 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-teal-700"
            />
            <div className="pt-1.5">
              <p className="text-[11px] font-medium text-[#64748B] mb-1.5">
                Quick presets:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {PRESET_TASKS.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => {
                      setApplianceId(preset.applianceId);
                      setTaskTitle(preset.label);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-[#F3EFE8] hover:bg-teal-50 border border-[#E2DDD4] text-[11px] font-medium text-[#334155] hover:text-teal-800 transition-colors cursor-pointer"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="maint-date"
              className="block text-xs font-semibold text-[#334155]"
            >
              Due Date
            </label>
            <input
              id="maint-date"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-sm text-[#0F172A] font-mono-nums focus:outline-none focus:border-teal-700"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="maint-notes"
              className="block text-xs font-semibold text-[#334155]"
            >
              Notes (Optional)
            </label>
            <textarea
              id="maint-notes"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any care instructions or reminders..."
              className="w-full p-3 rounded-xl border border-[#D8D2C8] bg-[#FAF8F5] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-teal-700"
            />
          </div>

          {formError && (
            <p className="text-xs font-medium text-red-700">{formError}</p>
          )}

          <button
            type="submit"
            className="w-full h-11 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>{t.pages.addTask}</span>
          </button>
        </form>

        {/* Right: Reminders List */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-[#E5E0D8]">
            <div className="flex flex-wrap gap-1.5">
              {(['All', 'Due Today', 'Upcoming', 'Completed'] as const).map(
                (tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setFilterStatus(tab)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      filterStatus === tab
                        ? 'bg-teal-700 text-white'
                        : 'bg-white border border-[#E2DDD4] text-[#334155] hover:border-teal-600'
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>
            <span className="font-mono-nums text-xs text-[#64748B]">
              Showing {filteredTasks.length} tasks
            </span>
          </div>

          {filteredTasks.length === 0 ? (
            <div className="bg-white rounded-2xl border border-[#E5E0D8] p-10 text-center space-y-2">
              <p className="font-display text-base font-bold text-[#0F172A]">
                No tasks in this view
              </p>
              <p className="text-sm text-[#64748B]">
                Use the form on the left to add a maintenance reminder for any
                household appliance.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredTasks.map((task) => {
                const status = computeMaintenanceStatus(task);
                const isEditing = editingId === task.id;
                return (
                  <article
                    key={task.id}
                    className="bg-white rounded-2xl border border-[#E5E0D8] p-5 space-y-3"
                  >
                    {isEditing ? (
                      <div className="space-y-3">
                        <div className="grid sm:grid-cols-2 gap-3">
                          <input
                            type="text"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            aria-label="Edit task title"
                            className="h-10 px-3 rounded-lg border border-[#D8D2C8] text-sm text-[#0F172A]"
                          />
                          <input
                            type="date"
                            value={editDate}
                            onChange={(e) => setEditDate(e.target.value)}
                            aria-label="Edit due date"
                            className="h-10 px-3 rounded-lg border border-[#D8D2C8] text-sm font-mono-nums text-[#0F172A]"
                          />
                        </div>
                        <input
                          type="text"
                          value={editNotes}
                          onChange={(e) => setEditNotes(e.target.value)}
                          placeholder="Notes..."
                          aria-label="Edit notes"
                          className="w-full h-10 px-3 rounded-lg border border-[#D8D2C8] text-sm text-[#0F172A]"
                        />
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => saveEdit(task)}
                            className="h-9 px-3.5 rounded-lg bg-teal-700 text-white text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Save</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setEditingId(null)}
                            className="h-9 px-3.5 rounded-lg border border-[#D8D2C8] text-xs font-semibold text-[#475569] inline-flex items-center gap-1.5 cursor-pointer"
                          >
                            <X className="w-3.5 h-3.5" />
                            <span>Cancel</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2.5 text-xs">
                            {renderStatus(status)}
                            <span className="text-[#CBD5E1]">·</span>
                            <span className="font-medium text-[#475569]">
                              {task.applianceName}
                            </span>
                            <span className="text-[#CBD5E1]">·</span>
                            <span className="font-mono-nums text-[#64748B]">
                              Due {task.dueDate}
                            </span>
                          </div>
                          <h3
                            className={`font-display text-base font-bold ${
                              task.completed
                                ? 'line-through text-[#64748B]'
                                : 'text-[#0F172A]'
                            }`}
                          >
                            {task.taskTitle}
                          </h3>
                          {task.notes && (
                            <p className="text-xs text-[#475569]">
                              {task.notes}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => toggleMaintenanceTask(task.id)}
                            className={`h-9 px-3 rounded-lg text-xs font-semibold border transition-colors cursor-pointer whitespace-nowrap ${
                              task.completed
                                ? 'bg-white border-[#D8D2C8] text-[#334155] hover:border-teal-600'
                                : 'bg-emerald-700 border-emerald-700 text-white hover:bg-emerald-800'
                            }`}
                          >
                            {task.completed ? 'Reopen' : 'Mark Done'}
                          </button>
                          <button
                            type="button"
                            onClick={() => startEditing(task)}
                            aria-label="Edit reminder"
                            className="h-9 w-9 rounded-lg border border-[#E2DDD4] bg-white text-[#475569] hover:text-teal-800 flex items-center justify-center cursor-pointer"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteMaintenanceTask(task.id)}
                            aria-label="Delete reminder"
                            className="h-9 w-9 rounded-lg border border-[#E2DDD4] bg-white text-[#475569] hover:text-red-700 hover:border-red-200 flex items-center justify-center cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

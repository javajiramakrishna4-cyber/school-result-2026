import { useState } from 'react';
import { Search, School, GraduationCap, Award, CheckCircle2, XCircle, Printer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { resultsData, StudentResult } from './data/results';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [student, setStudent] = useState<StudentResult | null>(null);
  const [error, setError] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = resultsData.find(s => s.rollNo === searchQuery.trim());
    if (found) {
      setStudent(found);
      setError('');
    } else {
      setStudent(null);
      setError('Roll Number not found. Please check and try again.');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-serif selection:bg-stone-200">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 py-8 px-4 text-center print:hidden">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-stone-100 rounded-full">
              <School className="w-8 h-8 text-stone-700" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-800 mb-2">
            DRAUPADI BIDYAPITHA, GUMUDA
          </h1>
          <p className="text-stone-500 uppercase tracking-widest text-sm font-sans font-semibold">
            Annual Examination Results 2025-26
          </p>
        </motion.div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-12 print:p-0 print:max-w-none">
        {/* Search Section */}
        <section className="mb-12 print:hidden">
          <form onSubmit={handleSearch} className="relative group">
            <input
              type="text"
              placeholder="Enter Student Roll Number (e.g. 4)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-stone-200 rounded-2xl focus:border-stone-800 focus:outline-none transition-all text-lg font-sans shadow-sm group-hover:shadow-md"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-stone-800 transition-colors" />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 px-6 bg-stone-800 text-white rounded-xl font-sans font-bold hover:bg-stone-700 transition-colors"
            >
              Search
            </button>
          </form>
          {error && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-red-600 text-center font-sans font-medium"
            >
              {error}
            </motion.p>
          )}
        </section>

        {/* Result Display */}
        <AnimatePresence mode="wait">
          {student && (
            <motion.div
              key={student.rollNo}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-stone-200 rounded-3xl shadow-xl overflow-hidden print:shadow-none print:border-stone-300"
            >
              {/* Marksheet Header */}
              <div className="bg-stone-800 text-white p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <GraduationCap size={120} />
                </div>
                <h2 className="text-2xl font-bold mb-1">{student.name}</h2>
                <p className="text-stone-400 font-sans uppercase tracking-widest text-xs">
                  Roll No: <span className="text-white font-bold">{student.rollNo}</span>
                </p>
                
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                  {student.status === 'PASS' ? (
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-400" />
                  )}
                  <span className="font-sans font-bold text-sm tracking-widest">
                    {student.status}
                  </span>
                </div>
              </div>

              {/* Marksheet Body */}
              <div className="p-8">
                <div className="grid grid-cols-1 gap-6">
                  {/* Subject List */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-stone-100 pb-2 text-stone-400 text-xs uppercase tracking-widest font-sans font-bold">
                      <span>Subject</span>
                      <span>Marks (100)</span>
                    </div>
                    
                    {[
                      { label: 'FLO', value: student.flo },
                      { label: 'SLE', value: student.sle },
                      { label: 'TLH', value: student.tlh },
                      { label: 'GSC', value: student.gsc },
                      { label: 'MATH', value: student.math },
                      { label: 'SSC', value: student.ssc },
                    ].map((subject) => (
                      <div key={subject.label} className="flex justify-between items-center group">
                        <span className="text-stone-600 font-medium">{subject.label}</span>
                        <div className="flex items-center gap-4">
                          <div className="w-32 h-2 bg-stone-100 rounded-full overflow-hidden hidden sm:block print:hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${subject.value}%` }}
                              className={`h-full ${subject.value >= 30 ? 'bg-stone-400' : 'bg-red-300'}`}
                            />
                          </div>
                          <span className={`font-mono font-bold w-8 text-right ${subject.value < 30 ? 'text-red-500' : ''}`}>
                            {subject.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary Section */}
                  <div className="mt-8 pt-8 border-t-2 border-dashed border-stone-200 grid grid-cols-2 sm:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-stone-50 rounded-2xl">
                      <p className="text-stone-400 text-[10px] uppercase tracking-widest font-sans font-bold mb-1">Total Marks</p>
                      <p className="text-2xl font-bold text-stone-800">{student.total}<span className="text-xs text-stone-400">/600</span></p>
                    </div>
                    <div className="text-center p-4 bg-stone-50 rounded-2xl">
                      <p className="text-stone-400 text-[10px] uppercase tracking-widest font-sans font-bold mb-1">Percentage</p>
                      <p className="text-2xl font-bold text-stone-800">{student.percentage}%</p>
                    </div>
                    <div className="text-center p-4 bg-stone-800 text-white rounded-2xl col-span-2 sm:col-span-1">
                      <p className="text-stone-400 text-[10px] uppercase tracking-widest font-sans font-bold mb-1">Grade</p>
                      <p className="text-2xl font-bold">{student.grade}</p>
                    </div>
                  </div>

                  {/* Footer Info */}
                  <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-stone-400 text-xs font-sans italic">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>Description: {student.description}</span>
                    </div>
                    <span>Date of Issue: March 25, 2026</span>
                  </div>
                </div>
              </div>
              
              {/* Print Button Footer */}
              <div className="bg-stone-50 p-6 text-center border-t border-stone-100 print:hidden">
                <button 
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-stone-200 text-stone-700 rounded-xl font-sans font-bold shadow-sm hover:shadow-md hover:border-stone-300 transition-all active:scale-95"
                >
                  <Printer className="w-5 h-5" />
                  Print Marksheet
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instructions */}
        {!student && !error && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-stone-400 py-12 print:hidden"
          >
            <p className="font-sans text-sm">Please enter your Roll Number to view your result.</p>
            <p className="font-sans text-xs mt-2">Results are available for Roll Nos 1 to 54.</p>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto py-12 px-4 border-t border-stone-200 text-center text-stone-400 text-xs font-sans print:hidden">
        <p>© 2026 Draupadi Bidyapitha, Gumuda. All Rights Reserved.</p>
        <p className="mt-1">Designed for Annual Examination Result Analysis – 2025-26</p>
      </footer>
    </div>
  );
}

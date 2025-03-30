export const TextArea = ({ target, name, label, type, onAction, className, placeholder, others }) => {
	return (
		<div className="flex flex-col gap-y-1 relative">
			<label htmlFor={target} className="font-light text-[.9rem] text-zinc-900 dark:text-white">
				{label}
			</label>
			<div className="relative">
				<textarea
					type={type ?? "text"}
					name={name}
					{...others}
					onChange={onAction}
					placeholder={placeholder ?? ""}
					className={`${className} focus:bg-zinc-200 dark:focus:bg-zinc-700 bg-white dark:bg-zinc-800 border border-zinc-400 dark:border-slate-600 border-solid block w-full rounded-md min-h-[8rem] outline-none placeholder:text-[.9rem] p-[0.75rem] text-[.95rem] text-zinc-900 dark:text-white/80 font-light resize-none transition-colors`}
					id={target}
				></textarea>
			</div>
		</div>
	);
};

const Input = ({ target, label, name, type, onAction, className, placeholder, others }) => {
	return (
		<div className="flex flex-col gap-y-1 relative">
			<label htmlFor={target} className="font-light text-[.9rem] text-zinc-900 dark:text-white">
				{label}
			</label>
			<div className="relative">
				<input
					type={type ?? "text"}
					name={name}
					{...others}
					onChange={onAction}
					placeholder={placeholder ?? ""}
					className={`focus:bg-zinc-200 dark:focus:bg-zinc-700 bg-white dark:bg-zinc-800 border border-zinc-400 dark:border-slate-600 border-solid block w-full  ${
						className ? className : ""
					} rounded-md min-h-[2.8rem] outline-none placeholder:text-[.9rem] p-[0.75rem] text-[.95rem] text-zinc-900 dark:text-white/80 font-light transition-colors`}
					id={target}
				/>
			</div>
		</div>
	);
};

export default Input;

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

interface IDialogFooter {
  className: string
}

const DialogFooter = ({ className, ...props }: IDialogFooter) => (
  <div className={`modal-footer ${className ? className : ''}`} {...props} />
)
DialogFooter.displayName = 'DialogFooter'

interface IDialogContent {
  className: string
  children: React.ReactNode
  title: string
}

const DialogContent = React.forwardRef<HTMLDivElement, IDialogContent>(
  ({ className, children, title, ...props }, ref) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Content
        ref={ref}
        className={`modal ${className ? className : ''}`}
        aria-describedby={undefined}
        {...props}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <DialogPrimitive.Title className="modal-title fs-5">
                {title}
              </DialogPrimitive.Title>

              <DialogPrimitive.Close asChild>
                <button className="btn-close"></button>
              </DialogPrimitive.Close>
            </div>
            {children}
          </div>
        </div>
      </DialogPrimitive.Content>
      <DialogPrimitive.Overlay className="modal-backdrop" />
    </DialogPrimitive.Portal>
  )
)
DialogContent.displayName = DialogPrimitive.Content.displayName

interface IDialogTitle {
  className: string
}

const DialogTitle = React.forwardRef<HTMLDivElement, IDialogTitle>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Title
      ref={ref}
      className={`modal-title fs-5 ${className ? className : ''}`}
      {...props}
    />
  )
)
DialogTitle.displayName = DialogPrimitive.Title.displayName

export { DialogFooter, DialogTitle, DialogContent }

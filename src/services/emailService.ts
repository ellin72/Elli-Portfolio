import emailjs from '@emailjs/browser';

declare global {
    interface ImportMetaEnv {
        readonly VITE_EMAILJS_PUBLIC_KEY?: string;
        readonly VITE_EMAILJS_SERVICE_ID?: string;
        readonly VITE_EMAILJS_TEMPLATE_ID?: string;
    }

    interface ImportMeta {
        readonly env: ImportMetaEnv;
    }
}

// Initialize EmailJS with your public key
const initializeEmailJS = () => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
    if (!publicKey) {
        return false;
    }
    emailjs.init(publicKey);
    return true;
};

const buildMailtoLink = (formData: EmailFormData) => {
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name || 'Website Visitor'}`);
    const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    return `mailto:shitunaelin@gmail.com?subject=${subject}&body=${body}`;
};

interface EmailFormData {
    name: string;
    email: string;
    message: string;
}

interface EmailResponse {
    success: boolean;
    message: string;
    error?: string;
}

export const sendContactEmail = async (formData: EmailFormData): Promise<EmailResponse> => {
    try {
        const hasEmailJsPublicKey = initializeEmailJS();

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

        if (!hasEmailJsPublicKey || !serviceId || !templateId) {
            window.location.href = buildMailtoLink(formData);
            return {
                success: true,
                message: 'Opened your email app to send this message.',
            };
        }

        const response = await emailjs.send(serviceId, templateId, {
            // Common EmailJS template variables – ensure your template uses one of these
            from_name: formData.name,
            name: formData.name,
            from_email: formData.email,
            reply_to: formData.email,
            message: formData.message,
            to_email: 'shitunaelin@gmail.com', // Your email address
        });

        if (response.status === 200) {
            return {
                success: true,
                message: 'Email sent successfully!',
            };
        }

        return {
            success: false,
            message: 'Failed to send email',
            error: 'Unexpected response status',
        };
    } catch (error) {
        console.error('Email sending error:', error);
        return {
            success: false,
            message: 'Failed to send email. Please try again later.',
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
};

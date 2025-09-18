/**
 * MJND Agent - Enhanced AI Assistant for Maijjd
 * Version: 2.0.0 with Comprehensive Intent Detection and Specific Responses
 */

class MJNDAgent {
  constructor() {
    this.name = 'MJND Agent';
    this.version = '2.0.0';
    this.brand = 'Maijjd';
    this.context = {
      conversationHistory: [],
      currentUser: null,
      sessionId: this.generateSessionId()
    };
    
    // Initialize response templates
    this.responses = this.initializeResponses();
  }

  /**
   * Initialize response templates
   */
  initializeResponses() {
    return {
      greeting: [
        "Hello! I'm MJND, your AI assistant for Maijjd. How can I help you today?",
        "Hi there! MJND here, ready to assist you with Maijjd's software solutions. What can I do for you?",
        "Welcome! I'm MJND, your guide to Maijjd's comprehensive software and services. How may I assist you?"
      ],
      software: [
        "Maijjd offers 50+ software categories including System Software, Application Software, Development Tools, Scientific Software, Real-time Software, Embedded Software, Cloud Software, AI & Machine Learning, CRM, ERP, and many more!",
        "Our software portfolio covers everything from basic productivity tools to advanced enterprise solutions. We have System Software, Application Software, Development Software, Scientific Software, Real-time Software, Embedded Software, Cloud Software, AI platforms, CRM, ERP, and 40+ other specialized categories.",
        "Maijjd provides comprehensive software solutions across 50 categories. From System Software & Operating Systems to AI & Machine Learning Platforms, CRM & Customer Management, ERP & Business Process Management, and 40+ more specialized categories."
      ],
      services: [
        "Maijjd offers 26+ professional services including Custom Software Development, Web Application Development, Mobile App Development, Cloud Infrastructure & DevOps, AI & Machine Learning Services, Data Analytics & Business Intelligence, Cybersecurity & Compliance, UI/UX Design, Quality Assurance & Testing, Technical Consulting & Architecture, and 16+ more services.",
        "Our service portfolio includes Custom Software Development, Web & Mobile App Development, Cloud Infrastructure & DevOps, AI & Machine Learning Services, Data Analytics & Business Intelligence, Cybersecurity & Compliance, UI/UX Design, Quality Assurance & Testing, Technical Consulting, and 16+ additional professional services.",
        "We provide 26+ specialized services: Custom Software Development, Web & Mobile Development, Cloud Infrastructure & DevOps, AI & Machine Learning Services, Data Analytics & Business Intelligence, Cybersecurity & Compliance, UI/UX Design, Quality Assurance & Testing, Technical Consulting & Architecture, and 16+ more professional services."
      ],
      pricing: [
        "Maijjd offers flexible pricing with a free tier for basic features, professional plans for businesses, enterprise solutions for large organizations, and custom pricing for specialized needs. All admin users have free access to all features.",
        "Our pricing structure includes: Free tier for basic features, Professional plans for businesses, Enterprise solutions for large organizations, and Custom pricing for specialized needs. Admin users get free access to all categories.",
        "Maijjd provides: Free tier for basic features, Professional plans for businesses, Enterprise solutions for large organizations, and Custom pricing for specialized needs. Admin users have zero cost access to all software and services."
      ],
      support: [
        "Maijjd provides 24/7 technical support for all users. You can reach us at info@maijjd.com or through our support portal at https://maijjd.com/support.",
        "We offer round-the-clock technical support. Contact us at info@maijjd.com or visit https://maijjd.com/support for assistance.",
        "Maijjd's support team is available 24/7. Reach out to us at info@maijjd.com or access our support portal at https://maijjd.com/support."
      ],
      features: [
        "Maijjd's key features include: Complete project management, Real-time collaboration tools, Advanced analytics and reporting, Secure data handling, Scalable infrastructure, Integrated development tools, Code collaboration features, Version control integration, Automated testing frameworks, Deployment pipelines, and Performance monitoring.",
        "Our platform offers: Complete project management, Real-time collaboration tools, Advanced analytics and reporting, Secure data handling, Scalable infrastructure, Integrated development tools, Code collaboration features, Version control integration, Automated testing frameworks, Deployment pipelines, and Performance monitoring.",
        "Key features of Maijjd: Complete project management, Real-time collaboration tools, Advanced analytics and reporting, Secure data handling, Scalable infrastructure, Integrated development tools, Code collaboration features, Version control integration, Automated testing frameworks, Deployment pipelines, and Performance monitoring."
      ],
      general: [
        "I'm MJND, your AI assistant for Maijjd! I can help you with:\n\n🔧 **Software Solutions**: 50+ categories including System Software, Application Software, Development Tools, AI & Machine Learning, CRM, ERP, and more\n\n🛠️ **Professional Services**: 26+ services like Custom Software Development, Web & Mobile Development, Cloud Infrastructure, AI Services, Data Analytics, Cybersecurity, UI/UX Design, and more\n\n💰 **Pricing**: Free tier, Professional plans, Enterprise solutions, and custom pricing\n\n✨ **Features**: Project management, Real-time collaboration, Advanced analytics, Secure data handling, and more\n\n🆘 **Support**: 24/7 technical support and assistance\n\nWhat would you like to know more about?",
        "Hello! I'm here to assist you with Maijjd's comprehensive offerings:\n\n**Software Categories (50+)**: From basic productivity tools to advanced enterprise solutions\n**Professional Services (26+)**: Custom development, consulting, cloud services, AI solutions\n**Flexible Pricing**: Free tier to enterprise plans\n**Advanced Features**: Collaboration tools, analytics, security, scalability\n**24/7 Support**: Always here to help\n\nFeel free to ask me about any of these areas!",
        "Hi there! I'm MJND, your guide to Maijjd's platform. Here's what I can help you with:\n\n📊 **Software Portfolio**: 50+ categories covering System Software, Application Software, Development Tools, Scientific Software, Real-time Software, Embedded Software, Cloud Software, AI & Machine Learning, CRM, ERP, and 40+ more\n\n🚀 **Professional Services**: 26+ services including Custom Software Development, Web Application Development, Mobile App Development, Cloud Infrastructure & DevOps, AI & Machine Learning Services, Data Analytics & Business Intelligence, Cybersecurity & Compliance, UI/UX Design, Quality Assurance & Testing, Technical Consulting & Architecture, and 16+ more\n\n💡 **Key Features**: Complete project management, Real-time collaboration tools, Advanced analytics and reporting, Secure data handling, Scalable infrastructure, and more\n\nWhat specific area interests you most?"
      ]
    };
  }

  /**
   * Process incoming customer message and generate appropriate response
   */
  async processMessage(message, userContext = {}) {
    try {
      // Update context with user information
      this.context.currentUser = userContext;
      
      // Add to conversation history
      this.context.conversationHistory.push({
        timestamp: new Date(),
        user: message,
        agent: null
      });

      // Analyze message intent
      const intent = this.analyzeIntent(message);
      console.log('🔧 MJND Agent - Message:', message);
      console.log('🔧 MJND Agent - Detected Intent:', intent);
      
      // Generate response based on intent
      const response = await this.generateResponse(intent, message, userContext);
      
      // Add response to conversation history
      this.context.conversationHistory[this.context.conversationHistory.length - 1].agent = response;
      
      return {
        success: true,
        response: response,
        intent: intent,
        timestamp: new Date(),
        agent: this.name
      };
    } catch (error) {
      console.error('Error processing message:', error);
      return {
        success: false,
        error: 'Sorry, I encountered an error. Please try again or contact support.',
        timestamp: new Date(),
        agent: this.name
      };
    }
  }

  /**
   * Analyze user intent from message
   */
  analyzeIntent(message) {
    const lowerMessage = message.toLowerCase().trim();
    
    // Exact greeting matches first
    if (lowerMessage === 'hi' || lowerMessage === 'hello' || lowerMessage === 'hey' || 
        lowerMessage === 'good morning' || lowerMessage === 'good afternoon' || 
        lowerMessage === 'good evening') {
      return 'greeting';
    }
    
    // Check for specific question patterns first
    const questionPatterns = {
      software: [
        'what software', 'software categories', 'what programs', 'programming tools',
        'development tools', 'software solutions', 'applications', 'software portfolio',
        'software offerings', 'available software', 'software catalog', 'software library',
        'what apps', 'what tools', 'software list', 'programs available',
        'ai & machine learning', 'machine learning', 'artificial intelligence', 'ai software',
        'system software', 'application software', 'development software', 'scientific software',
        'real-time software', 'embedded software', 'cloud software', 'crm software',
        'erp software', 'database software', 'security software', 'analytics software',
        'business software', 'productivity software', 'graphics software', 'multimedia software',
        'gaming software', 'educational software', 'medical software', 'financial software',
        'e-commerce software', 'cms software', 'lms software', 'crm system',
        'erp system', 'operating system', 'web browser', 'office suite',
        'programming language', 'framework', 'library', 'api', 'sdk'
      ],
      services: [
        'what services', 'tell me about services', 'professional services', 'consulting services',
        'development services', 'custom development', 'web development', 'mobile development',
        'create website', 'build website', 'website development', 'app development',
        'software development', 'custom software', 'web application', 'mobile application',
        'cloud services', 'devops services', 'ai services', 'machine learning services',
        'data analytics', 'cybersecurity services', 'ui/ux design', 'quality assurance',
        'technical consulting', 'architecture services', 'guide me how to create',
        'help me create', 'how to build', 'how to develop', 'guide me to get',
        'help me get', 'how to get', 'packages of learning', 'learning packages',
        'full packages', 'complete packages', 'training services', 'consulting services',
        'implementation services', 'integration services', 'maintenance services',
        'support services', 'migration services', 'upgrade services', 'customization services',
        'deployment services', 'testing services', 'documentation services', 'training programs'
      ],
      pricing: [
        'how much', 'what does it cost', 'pricing plans', 'subscription plans',
        'payment options', 'billing information', 'cost breakdown', 'price list',
        'free trial', 'free tier', 'enterprise pricing', 'custom pricing',
        'what is the cost', 'how much does', 'pricing information', 'cost of',
        'price for', 'subscription cost', 'monthly cost', 'annual cost',
        'one-time cost', 'license cost', 'per user cost', 'per month', 'per year'
      ],
      support: [
        'technical support', 'customer support', 'contact support', 'get help',
        'report bug', 'report issue', 'troubleshoot', 'fix problem',
        'resolve issue', 'error message', 'not working', 'broken',
        'support ticket', 'help desk', 'bug report', 'error report',
        'system error', 'application error', 'login problem', 'access issue',
        'connection problem', 'performance issue', 'something wrong', 'having trouble',
        'can\'t access', 'won\'t work', 'doesn\'t work', 'failed to', 'unable to',
        'error occurred', 'problem with', 'issue with', 'trouble with'
      ],
      features: [
        'what features', 'key features', 'platform features', 'capabilities',
        'functionality', 'what can it do', 'how does it work', 'benefits',
        'advantages', 'special features', 'unique features', 'main features',
        'what does it do', 'how does it help', 'what can you do', 'features include',
        'platform capabilities', 'system features', 'tool features', 'software features',
        'available features', 'included features', 'premium features', 'basic features',
        'advanced features', 'core features', 'additional features', 'new features'
      ]
    };
    
    // Special handling for AI & Machine Learning - check for services first
    if ((lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('artificial intelligence')) && 
        (lowerMessage.includes('service') || lowerMessage.includes('consulting') || lowerMessage.includes('development'))) {
      return 'services';
    }
    
    // Check each category for matches
    for (const [category, patterns] of Object.entries(questionPatterns)) {
      for (const pattern of patterns) {
        if (lowerMessage.includes(pattern)) {
          return category;
        }
      }
    }
    
    // Check for general help patterns that should be treated as general, not support
    const generalHelpPatterns = [
      'could you help me', 'can you help me', 'help me', 'what can you do',
      'what do you do', 'tell me about', 'i need', 'i want', 'i am looking for',
      'can you assist', 'what are your', 'do you have', 'show me', 'explain',
      'information about', 'more about', 'what is', 'who are you'
    ];
    
    for (const pattern of generalHelpPatterns) {
      if (lowerMessage === pattern || lowerMessage.includes(pattern)) {
        return 'general';
      }
    }
    
    // Check for single word help that should be general
    if (lowerMessage === 'help') {
      return 'general';
    }
    
    // Broader keyword matching as fallback
    if (lowerMessage.includes('software') || lowerMessage.includes('program') || 
        lowerMessage.includes('application') || lowerMessage.includes('app') || 
        lowerMessage.includes('tool') || lowerMessage.includes('platform') ||
        lowerMessage.includes('system') || lowerMessage.includes('framework') ||
        lowerMessage.includes('library') || lowerMessage.includes('api') ||
        lowerMessage.includes('sdk') || lowerMessage.includes('language') ||
        lowerMessage.includes('ai') || lowerMessage.includes('machine learning') ||
        lowerMessage.includes('artificial intelligence') || lowerMessage.includes('crm') ||
        lowerMessage.includes('erp') || lowerMessage.includes('database') ||
        lowerMessage.includes('security') || lowerMessage.includes('analytics') ||
        lowerMessage.includes('business') || lowerMessage.includes('productivity') ||
        lowerMessage.includes('graphics') || lowerMessage.includes('multimedia') ||
        lowerMessage.includes('gaming') || lowerMessage.includes('educational') ||
        lowerMessage.includes('medical') || lowerMessage.includes('financial') ||
        lowerMessage.includes('e-commerce') || lowerMessage.includes('cms') ||
        lowerMessage.includes('lms') || lowerMessage.includes('operating') ||
        lowerMessage.includes('browser') || lowerMessage.includes('office') ||
        lowerMessage.includes('suite') || lowerMessage.includes('package')) {
      return 'software';
    }
    
    if (lowerMessage.includes('service') || lowerMessage.includes('development') || 
        lowerMessage.includes('consulting') || lowerMessage.includes('create') ||
        lowerMessage.includes('build') || lowerMessage.includes('design') ||
        lowerMessage.includes('guide') || lowerMessage.includes('help me') ||
        lowerMessage.includes('get') || lowerMessage.includes('packages') ||
        lowerMessage.includes('learning') || lowerMessage.includes('training') ||
        lowerMessage.includes('implementation') || lowerMessage.includes('integration') ||
        lowerMessage.includes('maintenance') || lowerMessage.includes('migration') ||
        lowerMessage.includes('upgrade') || lowerMessage.includes('customization') ||
        lowerMessage.includes('deployment') || lowerMessage.includes('testing') ||
        lowerMessage.includes('documentation') || lowerMessage.includes('programs')) {
      return 'services';
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || 
        lowerMessage.includes('free') || lowerMessage.includes('payment') || 
        lowerMessage.includes('pricing') || lowerMessage.includes('subscription') ||
        lowerMessage.includes('plan') || lowerMessage.includes('billing') ||
        lowerMessage.includes('monthly') || lowerMessage.includes('annual') ||
        lowerMessage.includes('license') || lowerMessage.includes('user') ||
        lowerMessage.includes('tier') || lowerMessage.includes('trial')) {
      return 'pricing';
    }
    
    if (lowerMessage.includes('feature') || lowerMessage.includes('capability') || 
        lowerMessage.includes('functionality') || lowerMessage.includes('benefits') || 
        lowerMessage.includes('advantages') || lowerMessage.includes('include') ||
        lowerMessage.includes('available') || lowerMessage.includes('included') ||
        lowerMessage.includes('premium') || lowerMessage.includes('basic') ||
        lowerMessage.includes('advanced') || lowerMessage.includes('core') ||
        lowerMessage.includes('additional') || lowerMessage.includes('new')) {
      return 'features';
    }
    
    // Default to general
    return 'general';
  }

  /**
   * Generate response based on intent
   */
  async generateResponse(intent, message, userContext) {
    const lowerMessage = message.toLowerCase().trim();
    
    // Generate specific responses based on the actual question
    let customizedResponse = this.generateSpecificResponse(intent, message, lowerMessage);
    
    // Add personalization if user is authenticated
    if (userContext.isAuthenticated) {
      customizedResponse = `Hello ${userContext.name || 'there'}! ${customizedResponse}`;
    }
    
    // Add relevant links based on intent
    if (intent === 'software') {
      customizedResponse += `\n\n🔗 Explore our software categories: https://maijjd.com/software-dashboard`;
    } else if (intent === 'services') {
      customizedResponse += `\n\n🔗 View our services: https://maijjd.com/services`;
    } else if (intent === 'pricing') {
      customizedResponse += `\n\n🔗 Check our pricing: https://maijjd.com/pricing`;
    } else if (intent === 'support') {
      customizedResponse += `\n\n🔗 Get support: https://maijjd.com/support`;
    }
    
    return customizedResponse;
  }

  /**
   * Generate specific response based on the actual question
   */
  generateSpecificResponse(intent, message, lowerMessage) {
    // Handle specific software questions
    if (intent === 'software') {
      if (lowerMessage.includes('scientific software') || lowerMessage.includes('how to get scientific')) {
        return "To get Scientific Software from Maijjd:\n\n1. **Browse our Scientific Software category** - We offer specialized scientific computing tools, data analysis software, simulation platforms, and research applications\n\n2. **Choose your access level**:\n   - Free tier: Basic scientific tools\n   - Professional: Advanced scientific software suites\n   - Enterprise: Complete scientific computing platforms\n\n3. **Contact our team** at info@maijjd.com for custom scientific software solutions\n\n4. **Schedule a demo** to see our scientific software in action";
      }
      
      if ((lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('artificial intelligence')) && 
          !lowerMessage.includes('service') && !lowerMessage.includes('consulting') && !lowerMessage.includes('development')) {
        return "Our AI & Machine Learning software includes:\n\n🤖 **AI Platforms**: Complete AI development environments\n🧠 **Machine Learning Tools**: Data preprocessing, model training, and deployment tools\n📊 **Data Science Suites**: Advanced analytics and visualization platforms\n🔬 **Research Tools**: Cutting-edge AI research and experimentation software\n\n**How to get started**:\n1. Try our free AI tools tier\n2. Upgrade to Professional for advanced features\n3. Contact us for custom AI solutions";
      }
      
      if (lowerMessage.includes('crm') || lowerMessage.includes('customer relationship')) {
        return "Our CRM software solutions include:\n\n👥 **Customer Management**: Complete customer lifecycle management\n📈 **Sales Automation**: Lead tracking and sales pipeline management\n📞 **Communication Tools**: Email, phone, and chat integration\n📊 **Analytics**: Customer insights and performance tracking\n\n**Getting started**:\n1. Choose from our CRM software categories\n2. Start with free tier or professional plans\n3. Customize for your business needs";
      }
      
      if (lowerMessage.includes('erp') || lowerMessage.includes('enterprise resource')) {
        return "Our ERP software covers:\n\n🏢 **Business Process Management**: Complete enterprise resource planning\n💰 **Financial Management**: Accounting, budgeting, and financial reporting\n📦 **Inventory Management**: Supply chain and inventory tracking\n👥 **Human Resources**: Employee management and payroll systems\n\n**Implementation options**:\n1. Cloud-based ERP solutions\n2. On-premise installations\n3. Custom ERP development";
      }
      
      // Default software response
      const responses = this.responses.software;
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Handle specific services questions
    if (intent === 'services') {
      if ((lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('artificial intelligence')) && 
          (lowerMessage.includes('service') || lowerMessage.includes('consulting') || lowerMessage.includes('development'))) {
        return "Our AI & Machine Learning Services include:\n\n🤖 **AI Consulting**: Strategic AI implementation and planning\n🧠 **Machine Learning Development**: Custom ML models and algorithms\n📊 **Data Science Services**: Advanced analytics and business intelligence\n🔬 **AI Research & Development**: Cutting-edge AI solutions and innovation\n🎯 **AI Integration**: Seamless integration of AI into existing systems\n\n**Service Process**:\n1. **AI Strategy Consultation**: Assess your needs and goals\n2. **Custom AI Solution Design**: Tailored AI architecture\n3. **Development & Implementation**: Build and deploy AI solutions\n4. **Training & Support**: Team training and ongoing support\n5. **Monitoring & Optimization**: Continuous improvement and maintenance\n\n**Technologies**: Python, TensorFlow, PyTorch, Scikit-learn, AWS AI, Azure AI, Google AI\n\nReady to transform your business with AI? Contact us at info@maijjd.com!";
      }
      
      if (lowerMessage.includes('packages') || lowerMessage.includes('learning') || lowerMessage.includes('training')) {
        return "Our Learning & Training Packages include:\n\n📚 **Programming Languages**: Complete learning paths for Python, JavaScript, Java, C++, and 20+ languages\n🎓 **Software Development**: Web development, mobile app development, full-stack development\n☁️ **Cloud Technologies**: AWS, Azure, Google Cloud, DevOps, and cloud architecture\n🤖 **AI & Machine Learning**: Data science, machine learning, deep learning, and AI development\n🔒 **Cybersecurity**: Ethical hacking, security analysis, and compliance training\n\n**Package Options**:\n- Individual courses\n- Complete learning tracks\n- Corporate training programs\n- Custom curriculum development\n\nContact us at info@maijjd.com to discuss your learning needs!";
      }
      
      if (lowerMessage.includes('website') || lowerMessage.includes('web development') || lowerMessage.includes('create website')) {
        return "Our Web Development Services include:\n\n🌐 **Custom Website Development**: Tailored websites for your business needs\n📱 **Responsive Design**: Mobile-friendly websites that work on all devices\n⚡ **Performance Optimization**: Fast-loading, SEO-optimized websites\n🔒 **Security Implementation**: Secure, protected websites with SSL and security measures\n\n**Development Process**:\n1. **Consultation**: We discuss your requirements and goals\n2. **Design**: Create wireframes and visual designs\n3. **Development**: Build your website with modern technologies\n4. **Testing**: Ensure everything works perfectly\n5. **Launch**: Deploy and maintain your website\n\n**Technologies we use**: React, Node.js, Python, PHP, WordPress, and more\n\nReady to start? Contact us at info@maijjd.com!";
      }
      
      // Default services response
      const responses = this.responses.services;
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Handle specific pricing questions
    if (intent === 'pricing') {
      if (lowerMessage.includes('per month') || lowerMessage.includes('monthly')) {
        return "Our Monthly Pricing Structure:\n\n🆓 **Free Tier**: $0/month\n- Basic software access\n- Limited features\n- Community support\n\n💼 **Professional**: $29-99/month\n- Full software access\n- Advanced features\n- Priority support\n- Team collaboration\n\n🏢 **Enterprise**: $199-499/month\n- All features included\n- Custom integrations\n- Dedicated support\n- Advanced analytics\n\n📞 **Custom Pricing**: Contact us for specialized needs\n\nAll admin users get free access to all features!";
      }
      
      if (lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
        return "Maijjd Pricing Overview:\n\n💰 **Free Tier**: $0 - Basic features and software access\n💼 **Professional Plans**: $29-99/month - Full access with advanced features\n🏢 **Enterprise Solutions**: $199-499/month - Complete platform with custom features\n🎯 **Custom Pricing**: Available for specialized requirements\n\n**Special Benefits**:\n- Admin users: Free access to all features\n- No setup fees\n- Cancel anytime\n- 30-day money-back guarantee\n\nContact us at info@maijjd.com for detailed pricing!";
      }
      
      // Default pricing response
      const responses = this.responses.pricing;
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Handle specific features questions
    if (intent === 'features') {
      if (lowerMessage.includes('included') || lowerMessage.includes('what features')) {
        return "Features Included in Maijjd:\n\n📊 **Project Management**: Complete project tracking and management tools\n🤝 **Real-time Collaboration**: Team collaboration and communication features\n📈 **Advanced Analytics**: Detailed reporting and business intelligence\n🔒 **Secure Data Handling**: Enterprise-grade security and data protection\n⚡ **Scalable Infrastructure**: Cloud-based, scalable platform\n🛠️ **Development Tools**: Integrated coding and development environment\n📝 **Version Control**: Git integration and code management\n🧪 **Automated Testing**: Built-in testing frameworks and tools\n🚀 **Deployment Pipelines**: Automated deployment and CI/CD\n📊 **Performance Monitoring**: Real-time performance tracking and optimization\n\n**Available on all plans** - Contact us to learn more!";
      }
      
      // Default features response
      const responses = this.responses.features;
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Handle specific support questions
    if (intent === 'support') {
      if (lowerMessage.includes('bug') || lowerMessage.includes('error') || lowerMessage.includes('problem')) {
        return "Technical Support - Issue Resolution:\n\n🔧 **Immediate Help**: Contact our 24/7 support team\n📧 **Email Support**: info@maijjd.com (Response within 2 hours)\n💬 **Live Chat**: Available on our website\n📞 **Phone Support**: +1-800-MAIJJD-1\n\n**For Bug Reports**:\n1. Describe the issue in detail\n2. Include screenshots if possible\n3. Specify your browser/device\n4. Provide error messages\n\n**Support Portal**: https://maijjd.com/support\n\nWe'll resolve your issue quickly!";
      }
      
      // Default support response
      const responses = this.responses.support;
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Default to general responses
    const responses = this.responses[intent] || this.responses.general;
    return responses[Math.floor(Math.random() * responses.length)];
  }

  /**
   * Generate session ID
   */
  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  /**
   * Get conversation history
   */
  getConversationHistory() {
    return this.context.conversationHistory;
  }

  /**
   * Clear conversation history
   */
  clearHistory() {
    this.context.conversationHistory = [];
  }

  /**
   * Update user context
   */
  updateUserContext(userContext) {
    this.context.currentUser = userContext;
  }

  /**
   * Get agent information
   */
  getAgentInfo() {
    return {
      name: this.name,
      version: this.version,
      brand: this.brand,
      capabilities: [
        'Customer support',
        'Software information',
        'Service inquiries',
        'Pricing information',
        'Feature explanations',
        'General assistance'
      ]
    };
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MJNDAgent;
}

// Global availability for browser use
if (typeof window !== 'undefined') {
  window.MJNDAgent = MJNDAgent;
}
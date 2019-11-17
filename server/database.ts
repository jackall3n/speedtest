import low, { LowdbAsync } from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';

class DatabaseService {
  private db!: LowdbAsync<{ dumps: any[] }>;

  constructor(private path: string) {
  }

  async initialize() {
    const adapter = new FileAsync(this.path);
    this.db = await low(adapter);
    this.db.defaults({ dumps: [] }).write()
  }

  async dump(dump: any) {
    const dumps = this.db.get('dumps');
    dumps.push(dump).write();
  }

  async dumps() {
    return await this.db.get('dumps').value()
  }
}

export default DatabaseService;
